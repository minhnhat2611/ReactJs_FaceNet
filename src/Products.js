import React from 'react'
import Product from './Product'
import './Products.css'

function Products({products}) {
  return (
    <div>
        <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Brand</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody >
                {products.map((product) => (
                    <Product key={product.id} Product={product}/>
                ))}
            </tbody>
        </table>
    </div>
  )
}



export default Products