import React from 'react'
import './Header.css'
import StoreIcon from '@mui/icons-material/Store'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'
import { useStateValue } from '../context/cartContext'

function Header() {
  const { state } = useStateValue()
  const basket = state?.basket || []
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="header_logo">
          <StoreIcon className="header_logo_image" fontSize="large" />
          <h2 className="header_logo_title">hArEeSh ShOp</h2>
        </div>
      </Link>

      <div className="header_search_bar">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <div className="nav_item">
            <span className="nav_ItemLineOne">Hello Guest</span>
            <span className="nav_ItemLineTwo">Sign In</span>
          </div>
        </Link>

        <div className="nav_item">
          <span className="nav_ItemLineOne">Your</span>
          <span className="nav_ItemLineTwo">Shop</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: 'none' }}>
          <div className="item-basket">
            <ShoppingBasketIcon />
            <span className="nav_ItemLineTwo nav_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
