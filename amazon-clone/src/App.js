import './App.css';
import Products from './components/Products/Products';
import { Redirect, Route, Switch} from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'
import { Elements} from '@stripe/react-stripe-js'
import Home from './components/Home/Home';
import Header from './components/Layouts/Header'
import SignIn from './components/Sign In/SignIn';
import NotFound from './components/Not Found/NotFound';
import ShoppingContext from './Context/shopping/shoppingContext';
import { useEffect, useContext } from 'react';
import { auth } from './Firebase';
import Checkout from './components/Checkout';
import Payment from './components/Payment';

const promise = loadStripe("pk_test_51NH2WxGD08KuOGkHUglGB6cIYxE1zjs744aCLManL2W6bcBZ9tEooqIIxAoeuOhCroqwh0e23Ehn1QbgQz2qWIWc00UsFJfaNq")

const App = ()=> {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is -> ", authUser);

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
   return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact><Redirect to='/home'/></Route>
          <Route path='/checkout'><Checkout /></Route>
          <Route path='/payment'><Elements stripe={promise}><Payment /></Elements></Route>
          <Route path='/signin'><SignIn /></Route>
      <Route path='/home'> <Home /></Route>
      <Route path='/products' exact> <Products /></Route>
      <Route path='*'> <NotFound/> </Route>
      </Switch>
      </main> 
      
    </>
  );
}

export default App;
