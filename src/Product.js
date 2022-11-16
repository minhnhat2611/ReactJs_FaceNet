import React from 'react'
import Button from './Button'
import './Product.css'

function Product({Product}) {
  return (
      <tr>
        <td>{Product.id}</td>
        <td>{Product.title}</td>
        <td>{Product.price}</td>
        <td>{Product.stock}</td>
        <td>{Product.brand}</td>
        <td className='actions'>
          <Button/>
        </td>
      </tr>
  )
}

// function handleDelete() {
//   alert("Delete");
// }

// function handleEdit() {
//   alert("Edit");
// }

export default Product