import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Share/Loading';

const PurchaseModal = ({ product, setProduct }) => {
    const { _id, name, } = product;
    const [user, loading] = useAuthState(auth);

    const handlePurches = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const client = e.target.name.value;
        console.log(client, email)

        const parchase = {
            productId: _id,
            productName: name,
            client: user.displayName,
            email: email,
            phone: e.target.phone.value,
        }

        fetch(`https://whispering-hamlet-31153.herokuapp.com/parchase`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(parchase),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast('order complete')
                } else {
                    toast.error('order again')
                }
                setProduct(null);
            })
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>


            <input type="checkbox" id="purch-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">

                <div className="modal-box  text-black">
                    <label htmlFor="purch-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className=''>
                        <h3 className="font-bold text-lg text-center text-secondary">Product Name: {name}</h3>
                        <form onSubmit={handlePurches} className='grid grid-cols-1 gap-4 justify-items-center mt-2'>
                            <input type="text" name='name' readOnly value={user?.displayName || ' '} className="input input-bordered input-primary  w-full max-w-xs" />
                            <input type="email" name='email' readOnly value={user?.email || ' '} className="input input-bordered input-primary  w-full max-w-xs" />
                            <input type="text" name='phone' placeholder="Phone" className="input input-bordered input-primary  w-full max-w-xs" />
                            <input type="submit" value='Submit' className="btn btn-secondary bg-gradient-to-r from-primary to-secondary w-full max-w-xs" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;