import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Category = () => {

    const [category, setCategory] = useState(null);
    const [items, setItems] = useState(null);

    const params = useParams();
    const navigate = useNavigate();
   
     
    useEffect(() => {
        getCategory();
        getItemsByCategory();
    },[])

    const getCategory = async () => {
        try {
            const response = axios.get(`http://localhost:8081/categories/${params.id}`);
            setCategory(response.data);
        } catch (error) {
            if(error.response.status === 401) {
                navigate("/login");   
        }
    }
    }
     
    const getItemsByCategory =  async() =>{ 
        try {
            const response = await axios.get(`http://localhost:8081/categories/${params.id}/items`);
            setItems(response.data);
        }catch (error) {
            if(error.response.status === 401) {
                navigate("/login");   
          }
        }
}


    return (
        <>

        <div>
        {category &&
                <h1>Items of {category.name} Category</h1>
        }

                <div>
                 <ul>
                     {items && items.map((item) => ( 
                         <li>
                             <Link to={`/items/${item.id}`}>{item.name}</Link>
                         </li>
                     ))}
                 </ul> 
                 
                     </div>
             </div> 
        </>
    );
}

export default Category;