import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
function ButtonCRUD({ color, text, icon, onClick }) {
  return (
    <Button
      className="container"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {text}
    </Button>
  );
}
ButtonCRUD.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

export default ButtonCRUD;
