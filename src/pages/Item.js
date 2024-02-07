
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

///////////////////////////////////////////////////////////////////


import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SingleItem = () => {

    const  params = useParams();

    const [item, setItem] = useState(null);
    
    const [setUpdateItem] = useState();

    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [qty, setQty] = useState();
    const [categoryId, setCategoryId] = useState();

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

    
    const handleName = (e) => {
        setName(e.target.value);
    }

    const handlePrice = (e) => {
        setPrice(e.target.value);
    }

    const handleQty = (e) => {
        setQty(e.target.value);
    }
 
    const handleCategoryId = (e) => {
        setCategoryId(e.target.value);
    }

    const updateItem = async () => {
        const data = {
            "name": name,
            "price": price,
            "qty": qty,
            "categoryId": categoryId
        };

        const response =  await axios.put(`http://localhost:8081/items/${params.id}`, data);
        if (response.status === 200) {
            setUpdateItem(response.data);
        } else {
            //error
        }
    }

   
    return (
        <>
         <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">  
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to={`/login`} class="nav-link" className="navbar-link">Login</Link>
        </li>
        <li class="nav-item">
        <Link to={`/`} class="nav-link" className="navbar-link">Home</Link>
        </li>
        <li class="nav-item">
        <Link to={`/categories`} class="nav-link" className="navbar-link">Categories</Link>
        </li>
        <li class="nav-item">
        <Link to={`/items`} class="nav-link"className="navbar-link">Items</Link>
        </li>
        <li class="nav-item">
        <Link to={`/checkout`} class="nav-link"className="navbar-link">Orders</Link>
        </li>
      </ul>
    </div>
  </div>
    </nav> 
        <div>
        <form onSubmit={updateItem} >
          {item &&
            <div>
                <div class="input-group-sm mb-3">
                     <span class="input-group-text">Item Name</span>
                     <textarea class="form-control-sm mb-3 " aria-label="With textarea"  onChange={handleName} value={name}>{item.name}</textarea>
                </div>
                <div class="input-group-sm mb-3">
                     <span class="input-group-text">Item Price</span>
                     <textarea class="form-control-sm mb-3" aria-label="With textarea" onChange={handlePrice} value={price}>{item.price}</textarea>
                </div>
                <div class="input-group-sm mb-3">
                     <span class="input-group-text">Item Qty</span>
                     <textarea class="form-control-sm mb-3" aria-label="With textarea" onChange={handleQty} value={qty}>{item.qty}</textarea>
                </div>
                 <div class="input-group-sm mb-3">
                     <span class="input-group-text">Item Category</span>
                     <textarea class="form-control-sm mb-3"  aria-label="With textarea" onChange={handleCategoryId} value={categoryId}>{ item.category.id}</textarea>
                </div> 
                
                </div> 
                        }
        </form>
        <button className="btn btn-outline-dark btn-sm" type="submit" onClick={updateItem}>Update Product</button>
                
        </div>
        </>
    )
}

export default SingleItem;
