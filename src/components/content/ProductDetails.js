import React from 'react'
import ProductForm from './ProductForm'

function ProductDetails() {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-10 offset-md-2">
        <h4>Classic Tee</h4>
        <hr />
        <b>$75.00</b>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          adipisci laboriosam, iusto natus dolores corporis quas dignissimos
          magnam, commodi esse eaque. Tempore laboriosam, rerum voluptate
          expedita aspernatur veniam quod explicabo?
        </p>
        <ProductForm />
      </div>
    </div>
  )
}

export default ProductDetails
