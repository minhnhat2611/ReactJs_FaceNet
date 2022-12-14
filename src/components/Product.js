import React, { useState } from "react";
import ButtonCRUD from "./Button";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from 'react-router-dom';
function Product({ product, removeItem, item, index, setData }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");
  const handleShow = async (id) => {
    setShow(true);
    setTitle(product.title);
    setPrice(product.price);
    setStock(product.stock);
    setBrand(product.brand);
  };
  const handleSave = async (id) => {
    const newData = {
      title: title,
      price: price,
      stock: stock,
      brand: brand,

    };

    await fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      body: JSON.stringify(newData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    setShow(false);
    const getData = async function () {
      const baseURL = "http://localhost:5000/product";
      const response = await axios.get(baseURL);
      const new_data = response.data;
      setData(new_data);
    }
    getData();
  };

  const removeItemComponent = () => {
    removeItem(item.id);
  }
  let navigate = useNavigate();
  const detail = (id) => {
    navigate(`/product/${id}`);
  }
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.stock}</td>
      <td>{product.brand}</td>
      <td>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div >
              <label >Title: </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div  >
              <label  >Price: </label>
              <input
                type="text"
                 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div  >
              <label  >Stock: </label>
              <input
                type="text"
                 
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <div>
              <label  >Brand: </label>
              <input
                type="text"
                 
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => handleSave(product.id)}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
        <ButtonCRUD
          text="Edit"
          icon="edit"
          onClick={() => handleShow(product.id)}
        ></ButtonCRUD>{" "}
        <ButtonCRUD
          onClick={() => {
            if (window.confirm("B???n c?? ch???c ch???n mu???n x??a?"))
              removeItemComponent();
          }}
          text="Delete"
          icon="delete"
        ></ButtonCRUD>
        <Button onDoubleClick={() => detail(product.id)}>
          Show
        </Button>
      </td>
    </tr>
  );
}

export default Product;