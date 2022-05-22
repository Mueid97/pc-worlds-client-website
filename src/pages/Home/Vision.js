import React from 'react';
import vision from '../../images/vision.jpg'
const Vision = () => {
    return (
        <div>
            <div className="hero min-h-screen mt-20" style={{backgroundImage: `url(${vision})`}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-black font-serif uppercase">Vision</h1>
                        <p className="mb-5 font-serif text-black">Computer vision is a field of artificial intelligence (AI) that enables computers and systems to derive meaningful information from digital images, videos and other visual inputs — and take actions or make recommendations based on that information.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary ">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision;