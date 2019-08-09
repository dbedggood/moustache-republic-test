import React from 'react'

function ProductForm() {
  return (
    <div>
      <p className="lightText">
        <b>
          SIZE<span className="required">*</span>
          <span className="Size">S</span>
        </b>
      </p>
      <div className="lightText">
        <button>S</button>
        <button>M</button>
        <button>L</button>
      </div>
      <br />
      <div>
        <button>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ProductForm
