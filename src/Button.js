import React from 'react'
import PropTypes from "prop-types";
// Function component Button
function Button(props) {
    const handleClick = () => {
        alert('Edit')
    }
    const handleClicks = () => {
      alert('Delete')
  }
    return(
        <div className='container'>
            <button className='custom-Btn' style={props.buttonColor} onClick={handleClick}>{props.buttonText}</button>
            <button className='custom-Btn' style={props.buttonColor} onClick={handleClicks}>{props.buttonTexts}</button>
        </div>
    );
}

//Button class component
// class Button extends React.Component {
//   constructor(props) {
//       super(props)
//   }

//   render(){
//       return(
//           <div className='container'>
//               <button className='custom-Btn' style={this.props.buttonColor} onClick={handleClick}>{this.props.buttonText}</button>
//           </div>
//       )
//   }
// }
// const handleClick = () => {
//   alert('Nguyễn Minh Nhật')
// }
Button.defaultProps = {
  buttonText: 'Edit',
  buttonTexts: 'Delete',
  buttonColor: {
      'color': 'blue'
  }
}

Button.propTypes = {
  buttonColor: PropTypes.object.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonTexts: PropTypes.string.isRequired
}
export default Button;  