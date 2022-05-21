import React from 'react';

const Part = ({product}) => {
    const {id, image, name, price, description, minimumQuantity, availableQuantity} = product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <p>Min-Quantity: {minimumQuantity}</p>
                    <p>Available-Quantity: {availableQuantity}</p>
                    <p>{description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;