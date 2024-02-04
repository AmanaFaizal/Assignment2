
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Item = () => {
    

    const [items, setItems] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getItems();
    },[])

    const getItems = async () => {

        try {
            const response = await axios.get("http://localhost:8081/items");
            setItems(response.data);
         } catch (error) {
            if(error.response.status === 401) {
                navigate("/login");
            }
        } 
        
    }

return (
    <>
        <h1>Item</h1>
        <div>
        <ol>
                {items && items.map((item) => ( 
                    <li>
                        <Link to={`/items/${item.id}`}>{item.name}</Link>
                    </li>
                ))}
            </ol>
        </div>
    </>
)
}

export default Item; 