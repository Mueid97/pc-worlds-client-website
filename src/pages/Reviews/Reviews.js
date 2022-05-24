import React from 'react';
import client1 from '../../images/people1.png'
import client2 from '../../images/people2.png'
import client3 from '../../images/people3.png'
import ReviewCard from './ReviewCard';
const Reviews = () => {
    const clients = [
        {
            "_id": 1,
            "name": "William carry",
            "city": "London",
            "message": "Very Good products",
            "img": client1,
        },
        {
            "_id": 2,
            "name": "jhon carry",
            "city": "London",
            "message": "Nice Products",
            "img": client2,
        },
        {
            "_id": 3,
            "name": "tomson barry",
            "city": "London",
            "message": "Excelent products",
            "img": client3,
        },
    ]
    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-28 px-14'>
                {
                    clients.map(client => <ReviewCard key={client._id}
                        client={client}></ReviewCard>
                       
                    )
                }
            </div>
            
        </div>
    );
};

export default Reviews;