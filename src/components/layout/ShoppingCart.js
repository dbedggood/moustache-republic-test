import React from 'react'

function ShoppingCart() {
  return (
    <div className="row">
      <div className="col-2 offset-9">
        <i className="fa fa-shopping-cart lightText d-lg-none" />
        <p className="float-right lightText d-none d-lg-block">My Cart</p>
      </div>
    </div>
  )
}

export default ShoppingCart
