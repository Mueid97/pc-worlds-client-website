import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Share/Loading';
const MyOrder = () => {
    const [order,setOrder]= useState([]);
    const[user,loading] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/parchase`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setOrder(data)});
        }
    }, [user])

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>My order: {order.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full text-secondary">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product name</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                      
                      {
                          order.map((o,index)=><tr key={o._id}>
                            <th>{index+1}</th>
                            <td>{o.clientName}</td>
                            <td>{o.email}</td>
                            <td>{o.productName}</td>
                            <td><button className="btn btn-success btn-sm">Success</button></td>
                            <td><button className="btn btn-error btn-sm">Delete</button></td>
                        </tr>)
                      }
                        
                       
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;