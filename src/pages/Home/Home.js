import React from 'react';
import Footer from '../Share/Footer';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import NewArrival from './NewArrival';
import Parts from './Parts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummery></BusinessSummery>
            <NewArrival></NewArrival>
            <Footer></Footer>
        </div>
    );
};

export default Home;