import React from 'react';
import Reviews from '../Reviews/Reviews';
import Footer from '../Share/Footer';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import NewArrival from './NewArrival';
import Parts from './Parts';
import Vision from './Vision';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {
    useEffect(()=>{
        AOS.init({duration: 2000});
    },[])
    return (
        <div>
            <Banner></Banner>
           <div data-aos="fade-right"><Parts></Parts></div>
            <div data-aos="fade-down"><NewArrival></NewArrival></div>
            <div data-aos="fade-up"><Vision></Vision></div>
            <div data-aos="fade-down"><BusinessSummery></BusinessSummery></div>
            <div data-aos="fade-left"><Reviews></Reviews></div>
            <Footer></Footer>
        </div>
    );
};

export default Home;