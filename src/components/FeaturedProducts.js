import axios from "axios";
import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";


const FeaturedProducts = () => {
    let [ products, setProdcts ] = useState([])

    useEffect(() => {
       fetchProductsAPI() 
    },[])
    
    let fetchProductsAPI = () => {
        axios.get('https://shoppingapiacme.herokuapp.com/shopping')
            .then((res) => {
                console.log(res)
                setProdcts(res.data)
            })
        .catch((err)=> console.log(err))
}


    return (
        <>

        <div>
            <h1>
                Featured Products
                </h1>
                <div className="item-container">
            {products.map((product) => (
                <div className="card">
                    <h1>{product.brand}</h1>    
                    <h3>{product.item}</h3>    
                    <img src={product.image} alt="" />
                    <h2>{product.price}</h2>
                    <Link to={`/product/${product.id}`}>View</Link>
                </div>
           
          
            ))}
                </div>
                </div>
            </>
)    
}

export default FeaturedProducts