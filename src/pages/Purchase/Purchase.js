import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../Share/Footer';
import Loading from '../Share/Loading';
import CountBtn from './CountBtn';
import PurchaseModal from './PurchaseModal';

const Purchase = () => {
    const [user, loading] = useAuthState(auth);
    const { purchaseId } = useParams();
    const [product, setProduct] = useState({});
    console.log(user);


    useEffect(() => {
        fetch(`https://whispering-hamlet-31153.herokuapp.com/product/${purchaseId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [purchaseId]);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div >
            {product && <PurchaseModal product={product} setProduct={setProduct}></PurchaseModal>}
            <div className="card lg:card-side bg-base-100 shadow-xl w-1/2 mx-auto my-10">
                <figure><img src={product.image} alt="Album" /></figure>
                <div className="card-body items-center text-black text-center font-serif">
                    <h2 className="card-title">{product.name}</h2>
                    <p>Price: {product.price}</p>
                    <p>Min-Quantity: {product.minimumQuantity}</p>
                    <p>Available-Quantity: {product.availableQuantity}</p>
                    <p>{product.description}</p>
                    <div className="card-actions justify-end">
                        <label htmlFor="purch-modal-6" className="btn bg-gradient-to-r from-primary to-secondary">Purchese</label>
                    </div>
                    <CountBtn></CountBtn>
                </div>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default Purchase;