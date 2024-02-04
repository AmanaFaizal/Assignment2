import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

    const [items, setItems] = useState(null);
    const [orderItems, setOrderItems] = useState([]);
    const [total, setTotal] = useState(0)

    const getItems = async () =>{   
            const response = await axios.get('http://localhost:8081/items');
            setItems(response.data);
   }


    const createOrder = async () => {
        const ItemIds = orderItems.map(obj => obj.id);
        const data = {
            items: ItemIds
        }

        const response = await axios.post("http://localhost:8081/orders", data);
        if(response.status === 201) {
            setOrderItems([]);
            setTotal(0);
           
        } else {
            //show error message
        }
    }
    



    useEffect(() => {
        getItems();
    },[]);


    return (
        <>
            <div className="container-fluid">
                <h1>Checking Out</h1>
                <div className="row">
                    <div className="col-md-6">
                        <h2>Items</h2>

                        {items && items.map(item => (
                            <div className="item-box px-2 py-2">
                                {item.name} - {item.price} 

                                <button className=" btn-secondary" onClick={() => {
                                    setOrderItems([...orderItems, item]);

                                    let currentTotal = total;
                                    currentTotal = currentTotal + item.price;
                                    setTotal(currentTotal);

                                }}>Add to Order</button>

                            </div>
                        ))}
                    </div>
                    <div className="col-md-6">
                        <h2>Order</h2>

                        <table className="table table-stripped">
                            <thead>
                                <tr>
                                    <th>Item ID</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderItems && orderItems.map(item => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                ))}

                            </tbody>
                            <thead>
                                <tr>
                                    <th colSpan={2}>
                                        Total
                                    </th>
                                    <th>
                                        {total}
                                    </th>
                                </tr>
                                
                            </thead>
                        </table>

                        <button className="btn btn-secondary" onClick={createOrder}>Complete Order</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;
