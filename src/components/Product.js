import React from 'react'
import './Product.css'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { useStateValue } from '../context/cartContext'

function Product({ id, title, image, price, rating }) {
  const { dispatch } = useStateValue()

  const addToBasket = () => {
    dispatch({
      type: 'add_to_basket',
      payload: {
        id,
        title,
        image,
        price,
        rating,
      },
    })
  }

  return (
    <div>
      <div className="product">
        <div className="product_info">
          <p>{title}</p>
          <p className="product_price">
            <small>$</small>
            <strong> {price}</strong>
          </p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>
                  <StarBorderIcon />
                </p>
              ))}
          </div>
        </div>
        <img src={image} alt="productImage" />
        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  )
}

export default Product
