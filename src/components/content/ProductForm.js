import React from 'react'

function ProductForm() {
  return (
    <div>
      <p className="lightText">
        <b>
          SIZE<span className="required">*</span>{' '}
          <span className="Size">S</span>
        </b>
      </p>
      <div className="lightText">
        <button className="sizeButton">S</button>
        <button className="sizeButton">M</button>
        <button className="sizeButton">L</button>
      </div>
      <br />
      <div>
        <button className="addToCartButton">ADD TO CART</button>
      </div>
    </div>
  )
}

export default ProductForm
