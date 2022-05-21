import React from 'react';
import newArrival from '../../images/new product.jpg'
const NewArrival = () => {
    return (
        <div className='mt-20'>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row-reverse gap-20">
                    <img src={newArrival}class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold text-accent mt">New Arrival</h1>
                        <p class="py-6">This Core i9-11900K Processor comes with Intel Iris Xe Graphics 32 graphics. This new 11th gen Rocket Lake microarchitecture is manufactured with the 14nm process that comes with eight cores and 16 threads. As this chip is updated to the latest BIOS revision, it nicely fits into any Intel 400 and 500 series motherboards. Focusing on this, all the major motherboard manufacturers have already started BIOS updates for their 400 and 500 series lineup. These Processors also support 64-bit computing on Intel architecture require an Intel x86-64 (64 bit) architecture-enabled BIOS.</p>
                        <button class="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrival;