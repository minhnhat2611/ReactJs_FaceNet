import React, { useState } from 'react'
import Button from './Button'
import './Product.css'
import Popup from './Popup';

function Product({Product}) {

  const [buttonPopup, ShowPopup] = useState(false);
  return (
      <tr>
        <td>{Product.id}</td>
        <td>{Product.title}</td>
        <td>{Product.price}</td>
        <td>{Product.stock}</td>
        <td>{Product.brand}</td>
        <td className='actions'>
          <Button handle={handleDelete} title="Delete"/>
          <Button handle={()=> ShowPopup(true)} title="Edit"/>
        </td>
        <Popup Props={Product} trigger={buttonPopup} Return={ShowPopup}/>
      </tr>
  )
}
function handleDelete() {
  alert("Đã xóa");
}
export default Product