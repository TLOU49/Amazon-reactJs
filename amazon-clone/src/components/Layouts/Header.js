import { Link } from "react-router-dom";
import { useContext } from 'react'
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { IoMdBasket } from "react-icons/io";
import ShoppingContext from "../../Context/shopping/shoppingContext";
import { auth } from "../../Firebase";

const Header = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;

  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  }

  return (
    <header className="header">
            <Link to="/">
              <img
                className="header_logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon logo"
              />
            </Link>
            <div className="header_search">
              <input className="header_input" type="text" />
              <BsSearch className="search_icon" />
            </div>
            <div className="header_nav">
              
                <Link to={!user &&  '/signin'}>
                  <div className="header_option" onClick={handleAuthentication}>
                    <span className="header_optionOne">Hello {!user ? 'Guest' : user.email}</span>
                    <span className="header_optionTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                  </div>
                </Link>
                    
              <div className="header_option">
                <span className="header_optionOne">Returns</span>
                <span className="header_optionTwo">& Orders</span>
              </div>
      
              <div className="header_option">
                <span className="header_optionOne">Your</span>
                <span className="header_optionTwo">Prime</span>
              </div>
      
                <Link to="/checkout">
              <div className="header_optionBasket">
                <IoMdBasket />
                <span className="header_optionTwo header_basketCount">{basket?.length}</span>
              </div>
                </Link>
              </div>
          </header>
      
  );
};

export default Header;
