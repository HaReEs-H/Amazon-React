import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img
            src="https://e0.pxfuel.com/wallpapers/466/782/desktop-wallpaper-e-commerce-e-commerce.jpg"
            alt="homelogo"
            className="home_image"
          />
          <div className="home_row">
            <Product
              id="12434"
              title="iPhone 13 Mini 128GB/256GB/512GB 
              Original Mobile Phone 5G LTE iOS"
              price={43}
              rating={4}
              image="https://m.media-amazon.com/images/I/61Yc75iMUWL._AC_UF1000,1000_QL80_.jpg"
            />
            <Product
              id="12467"
              title="Apple 2022 13 MacBook Air M2 
              16GB RAM, 256GB Storage - Space Gray (Z15S000CT)"
              price={99}
              rating={3}
              image="https://m.media-amazon.com/images/I/71jvo-a1MzL._AC_SX679_.jpg"
            />
          </div>
          <div className="home_row">
            <Product
              id="1243467"
              title="SAMSUNG 65IN UHD Non-Smart Hospitality TV"
              price={195}
              rating={3}
              image="https://m.media-amazon.com/images/I/51993B+DolS._AC_.jpg"
            />
            <Product
              id="1209"
              title="Realspace RS Gaming™ RGX Faux Leather High-Back
               Gaming Chair, Black/Red, BIFMA Compliant"
              price={58}
              rating={5}
              image="https://m.media-amazon.com/images/I/61PwVKrXe3L._AC_SL1500_.jpg"
            />
            <Product
              id="12567"
              title="CAP Barbell Coated Dumbbell Weight | 
              Multiple Handle Options"
              price={19}
              rating={3}
              image="https://m.media-amazon.com/images/I/71+KDPrgeDL._AC_SL1500_.jpg"
            />
          </div>
          <div className="home_row">
            <Product
              id="124234"
              title="MageGee 75% Mechanical Gaming Keyboard with 
              Blue Switch, LED Blue Backlit Keyboard"
              price={29}
              rating={3}
              image="https://m.media-amazon.com/images/I/61eavECexVL._AC_SX679_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
