import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { useStateValue } from '../context/cartContext'

function Checkout() {
  const { state } = useStateValue()
  const basket = state?.basket || []
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://assets.indiadesire.com/images/amazon%20great%20indian%20festival%20finale%20days%20oct%202023.jpg"
          alt="ads"
          className="checkout_ad"
        />
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
