import React from 'react';

const Part = ({product}) => {
    const {id, image, name, price, description, minimumQuantity, availableQuantity} = product;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={image} alt="Shoes" class="rounded-xl h-52" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <p>Min-Quantity: {minimumQuantity}</p>
                    <p>Available-Quantity: {availableQuantity}</p>
                    <p>{description}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;