import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleItem = () => {

    const  params = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        getItemById();
    },[])
    
    const navigate = useNavigate();

    const getItemById = async () => {
    try {
            const response = await axios.get(`http://localhost:8081/items/${params.id}`);
            setItem(response.data);
    } catch (error) {
        
        if(error.response.status===401){
            navigate("/login");
        }
    } 

    }
    return (
        <>
            {item &&
                <div>
                    <h1>{item.name}</h1>
                    <div>Id: {item.id}</div>
                    <div>Price: {item.price} LKR</div>
                    <div>Stock: {item.qty}</div>
                </div>
            }
        </>
    )
}

export default SingleItem;