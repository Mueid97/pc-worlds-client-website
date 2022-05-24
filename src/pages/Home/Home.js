import React from 'react';
import Reviews from '../Reviews/Reviews';
import Footer from '../Share/Footer';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import NewArrival from './NewArrival';
import Parts from './Parts';
import Vision from './Vision';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <NewArrival></NewArrival>
            <Vision></Vision>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;