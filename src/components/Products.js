import React, { useState, useEffect } from "react";
import Product from "./Product";
function Products({ data, setData, removeItem, searchItemName }) {

  const [valueSearch, setValueSearch] = useState("");

  return (
    <div >
      <table
        width="100%"
        className="table-striped table-bordered text-center mt-5"
      >
        <thead>
          <tr>
            <th width="5%">ID</th>
            <th width="25%">Title</th>
            <th width="10%">Price</th>
            <th width="10%">Stock</th>
            <th width="20%">Brand</th>
            <th width="30%">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((item) =>
            item.title.toLowerCase().includes(
              valueSearch.toLowerCase().trim())).map((item, index) => (
                <Product
                  key={item.id}
                  index={index}
                  product={item}
                  item={item}
                  removeItem={removeItem}
                  data={data}
                  setData={setData}
                />
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
