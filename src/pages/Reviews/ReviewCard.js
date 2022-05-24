import React from 'react';

const ReviewCard = ({ client }) => {
    const { name, city, message, img } = client;
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl text-black">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className=''>{city}</h2>
                    <p>{message}</p>
                    <div class="rating rating-xs">
                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <figure><div className="avatar mb-10">
                    <div className="w-24 mask mask-squircle">
                        <img src={img} alt='' />
                    </div>
                </div>
                </figure>

            </div>
        </div>
    );
};

export default ReviewCard;