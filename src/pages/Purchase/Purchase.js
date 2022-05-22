import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Share/Footer';

const Purchase = () => {
    const { purchaseId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/product/${purchaseId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [purchaseId])
    return (
        <div >
            
            <div class="card lg:card-side bg-base-100 shadow-xl w-1/2 mx-auto my-10">
                <figure><img src={product.image} alt="Album"/></figure>
                <div class="card-body items-center text-black text-center font-serif">
                    <h2 class="card-title">{product.name}</h2>
                    <p>Price: {product.price}</p>
                    <p>Min-Quantity: {product.minimumQuantity}</p>
                    <p>Available-Quantity: {product.availableQuantity}</p>
                    <p>{product.description}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;