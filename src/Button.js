import React from 'react'

function Button({title, handle}) {
  return (
    <div className='button' onClick={handle}><i></i>{title}</div>
  )
}

export default Button