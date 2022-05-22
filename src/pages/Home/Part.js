import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({product}) => {
    const {_id, image, name, price, description, minimumQuantity, availableQuantity} = product;
    const navigate = useNavigate();

    const handleBye = (id)=>{
        navigate(`/purchase/${id}`);
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-52" />
                </figure>
                <div className="card-body items-center text-black text-center font-serif">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <p>Min-Quantity: {minimumQuantity}</p>
                    <p>Available-Quantity: {availableQuantity}</p>
                    <p>{description}</p>
                    <div className="card-actions">
                        <button onClick={()=>handleBye(_id)} className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;