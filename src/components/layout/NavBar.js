import React from 'react'
import ShoppingCart from './ShoppingCart'

function NavBar() {
  return (
    <div className="row">
      <div className="col-10 offset-1">
        <div className="NavBar">
          <ShoppingCart />
        </div>
      </div>
    </div>
  )
}

export default NavBar
