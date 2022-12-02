import React, { useState, useEffect } from "react";
import Product from "./Product";
function Products({ data, setData, removeItem, searchItemName }) {

  const [valueSearch, setValueSearch] = useState("");

  return (
    <div >
      <table border="solid 1px">
        <thead>
          <tr>
            <th >ID</th>
            <th >Title</th>
            <th >Price</th>
            <th >Stock</th>
            <th >Brand</th>
            <th >Action</th>
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
