import React from 'react';
import { BsFillFlagFill } from 'react-icons/bs';
import { SiPolymerproject } from 'react-icons/si';
import { IoIosPeople } from 'react-icons/io';
const BusinessSummery = () => {
    return (
        <div className='my-24'>
            <h1 className='text-4xl text-center font-serif font-extrabold uppercase text-secondary'>Millions of Customers Trust us</h1>
            <p className='text-xl text-center font-serif font-extrabold uppercase text-secondary'>we know what our client needs</p>
            <div className="divider w-1/2 mx-auto "></div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center '>
                <div className='grid justify-items-center content-center'>
                    <p className=' text-secondary text-6xl'><BsFillFlagFill /></p>
                    <h1 className='text-8xl font-serif text-black'>50+</h1>
                    <p className='text-secondary text-2xl uppercase my-4'>Countries</p>
                </div>
                <div className='grid justify-items-center content-center'>
                    <p className=' text-secondary text-6xl'><SiPolymerproject /></p>
                    <h1 className='text-8xl font-serif text-black'>450+</h1>
                    <p className='text-secondary text-2xl uppercase my-4'>Projects</p>
                </div>
                <div className='grid justify-items-center content-center'>
                    <p className=' text-secondary text-6xl'><IoIosPeople /></p>
                    <h1 className='text-8xl font-serif text-black'>250+</h1>
                    <p className='text-secondary text-2xl uppercase my-4'>happy clients</p>
                </div>
               
            </div>
        </div>
    );
};

export default BusinessSummery;