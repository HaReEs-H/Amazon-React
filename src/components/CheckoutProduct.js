import React from 'react'
import './CheckoutProduct.css'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { useStateValue } from '../context/cartContext'

function CheckoutProduct({ id, title, image, price, rating }) {
  const { dispatch } = useStateValue()
  const removeFromBasket = () => {
    dispatch({
      type: 'remove_from_basket',
      payload: id,
    })
  }
  return (
    <div className="checkout_product">
      <img src={image} alt="checkoutpro" className="checkout_product_image" />
      <div className="checkout_product_info">
        <p className="checkout_product_title">{title}</p>
        <p className="checkout_product_price">
          <small>$</small>
          <strong> {price}</strong>
        </p>
        <div className="checkout_product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <StarBorderIcon />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
