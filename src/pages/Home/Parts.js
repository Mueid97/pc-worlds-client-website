import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1 className='text-center font-extrabold text-4xl font-serif text-black mt-10 uppercase'>All Parts</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-14 mt-10'>
                {
                    products.map(product => <Part key={product.id} product={product}></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;