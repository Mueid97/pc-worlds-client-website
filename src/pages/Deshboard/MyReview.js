import React from 'react';

const MyReview = () => {

    const handleComment = e =>{
        e.preventDefault();
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <form onSubmit={handleComment
                    }>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-black">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-black">Address</span>
                                    </label>
                                    <input type="text" placeholder="Address" className="input input-bordered" />
                                    <label className="label">

                                    </label>
                                </div>
                                <div>
                                    <textarea className="textarea textarea-secondary" placeholder="Comment"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyReview;