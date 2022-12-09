import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

const Detail = () => {
    const params = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = async function () {
            const baseURL = `http://localhost:5000/product/${params.id}`;
            const response = await axios.get(baseURL);
            const new_data = response.data;
            setData(new_data);
        }
        getData();
    }, [params.id])

    console.log(data);
    return (
        <>
            <h2>Chi tiết sản phẩm</h2>
            <div>
                <Table>
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Id</td>
                            <td>{data.id}</td>
                        </tr>
                        <tr>
                            <td>Title</td>
                            <td>{data.title}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{data.price}</td>
                        </tr>
                        <tr>
                            <td>Stock</td>
                            <td>{data.stock}</td>
                        </tr>
                        <tr>
                            <td>Brand</td>
                            <td>{data.brand}</td>
                        </tr>
                    </tbody>
                </Table>
            </div></>
    )
}

export default Detail;