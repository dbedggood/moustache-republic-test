import React from 'react'
import ProductDetails from './ProductDetails'

function ProductPage() {
  return (
    <div className="row Content">
      <div className="col-3 offset-3 bg-dark">
        <img className="ProductImage" src="./classic-tee.jpg" alt="tshirt" />
      </div>
      <div className="col-4">
        <ProductDetails />
      </div>
    </div>
  )
}

export default ProductPage
