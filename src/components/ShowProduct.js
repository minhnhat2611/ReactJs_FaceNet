import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

const ShowProduct = () => {
    const params = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = async function () {
            const baseURL = `http://localhost:5000/currentData/${params.id}`;
            const response = await axios.get(baseURL);
            const new_data = response.data;
            setData(new_data);
        }
        getData();
    }, [params.id])

    console.log(data);
    return (
        <>
            <div >
                <Table striped hover>
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
                            <td>Description</td>
                            <td>{data.description}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{data.price}</td>
                        </tr>
                        <tr>
                            <td>DiscountPercentage</td>
                            <td>{data.discountPercentage}</td>
                        </tr>
                        <tr>
                            <td>Rating</td>
                            <td>{data.rating}</td>
                        </tr>
                        <tr>
                            <td>Stock</td>
                            <td>{data.stock}</td>
                        </tr>
                        <tr>
                            <td>Brand</td>
                            <td>{data.brand}</td>
                        </tr>

                        <tr>
                            <td>Category</td>
                            <td>{data.category}</td>
                        </tr>
                        <tr>
                            <td>Thumbnail</td>
                            <td className="border border-dark text-center">
                                <img src={data.thumbnail} style={{ width: "30%" }} />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div></>
    )
}

export default ShowProduct;