import React, { useContext } from "react";
import {Link } from "react-router-dom"
import CurrencyFormat from "react-currency-format";
import './Subtotal.css'
import ShoppingContext from '../Context/shopping/shoppingContext'

const Subtotal = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContext;
  console.log(getBasketTotal(basket));
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift"><input type="checkbox"/>This order contains a gift</small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        prefix={"$"}
      />
     <Link to='/payment'>
      <button >Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Subtotal;
