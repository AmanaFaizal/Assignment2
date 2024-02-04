import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {

    const [items, setItems, setCreateItem, setUpdateItem] = useState(null);
    const [categories, setCategories] = useState(null);

    const [name, setName] = useState(null);
    const [price, setPrice] = useState(null);
    const [qty, setQty] = useState(0);
    const [categoryId, setCategoryId] = useState(null);

    useEffect(() => {
        getItems();
        getCategories();
    },[])

    const navigate = useNavigate();

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

    const getCategories = async () => {
        try {
            const response = await axios.get("http://localhost:8081/categories");
            setCategories(response.data);
         }catch (error) {
            if(error.response.status === 401) {
                navigate("/login");
            }
        } 
        
    }

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handlePrice = (event) => {
        setPrice(event.target.value);
    }

    const handleQty = (event) => {
        setQty(event.target.value);
    }

    const handleCategory = (event) => {
        setCategoryId(event.target.value);
    }

   /*  const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            "name": name,
            "price": price,
            "qty": qty,
            "categoryId": categoryId
        }

        fetch("http://localhost:8081/items", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setItems([...items, data]); 
            setName(null);
            setPrice(null);
            setQty(null);
            setCategoryId(null);

            console.log(items)
        }).catch(error => {
            console.log(error);
        })
    } */
    const createItem = async () => {
        const data = {
            "name": name,
            "price": price,
            "qty": qty,
            "categoryId": categoryId
        }

        const response = await axios.post("http://localhost:8081/items", data);
        if(response.status === 201) {
            setCreateItem();
           
        } else {
            //show error message
        }
    }
    const updateItem = async () => {
        const data = {
            "name": name,
            "price": price,
            "qty": qty,
            "categoryId": categoryId
        }

        const response = await axios.put("http://localhost:8081/items", data);
        if(response.status === 201) {
            setUpdateItem();
           
        } else {
            //show error message
        }
    }
        
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }



    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                         <button className="btn-secondary" onClick={handleLogout}>logout</button>
                         

                        <h2 >Categories</h2>
                        <ol>
                            {categories && categories.map((category) => (
                                <li class="list-group-item list-group-item-action active">
                                    <Link to={`/categories/${category.id}`} className="nav-link">{category.name}</Link>
                                </li>
                            ))}
                        </ol>
                            <h2 >Items</h2>
                            <button className="btn-secondary" onClick={getItems}>Load Items</button>
                        <ol>
                            {items && items.map((item) => ( 
                                <li>
                                    <Link to={`/items/${item.id}`}>{item.name}</Link>
                                </li>
                            ))}
                        </ol>
                         </ul>
                           
                        
                    </div>
                </div>
            </nav>

            <div className="create-box">
            <h2>Home</h2>

            {/* //<form onSubmit={handleSubmit}> */}
            <form>
                <div>
                    <label>Item Name</label>
                    <input type="text" required className="form-control" onChange={handleName} value={name} />
                </div>
                <div>
                    <label>Item  Price</label>
                    <input type="text" required className="form-control" onChange={handlePrice} value={price} />
                </div>
                <div>
                    <label>Item  Qty</label>
                    <input type="text" required className="form-control" onChange={handleQty} value={qty} />
                </div>
                <div>
                <label>Category</label>
                    <select required onChange={handleCategory}>
                        <option>Please Select</option>

                        {categories && categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}

                    </select>
                </div>
                <button className="btn-secondary" type="submit" onClick={createItem}>Save Product</button>
                
            </form>
            </div>
            </>
        )
 }

export default Home;