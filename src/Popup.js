import React from 'react'
import Button from './Button'
import './Popup.css'

function Popup({Props, trigger, Return}) {
    
    return (trigger) ? (
    <div className='popup'>
        <div className='popup_inner'>
        { Object.targets(Props).map((target, i) => (
            <div target={i}>
            <label>{target}</label><br/>
            <input onChange={handleChange}type="text" defaultValue={Props[target]}></input>
            </div>
        ))}
            <div className='button_popup'>
            <Button title="Save" handle={()=>handleSave}/>
            <Button title="Cancel" handle={() => Return(false)}/>   
            </div>
        </div>
    </div>
    ) : "";
    
}
export default Popup

