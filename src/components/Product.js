import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Product = ({match}) => {
    
    const {id} = useParams()
    const [data, setData] = useState([]);
  
    const fetchProduct = () => {
        axios
            .get(
                `https://shoppingapiacme.herokuapp.com/shopping/?id=${encodeURIComponent(id)}`
            )
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        fetchProduct();
    }, [id]);

    return (
        <div>
            {data.map((prodDetails) => {
                return (
                    <>
                    <div key={prodDetails.id}>
                        <img src={prodDetails.image} alt='' />
                        <h3>{prodDetails.description}</h3>
                    </div>
                    <div>
                            <Link to={'/'}>Back</Link>
                    </div>
                    </>
                        )
            })}
        </div>
    )
}   
    export default Product