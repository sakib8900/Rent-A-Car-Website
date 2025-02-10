import React from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';
import RecentCars from './cars/RecentCars';
import ClientReview from './cars/clientReview';
import SpecialOffers from './cars/SpecialOffers';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Rent A Car || Home</title>
            </Helmet>
            {/* Full Width Banner */}
            <div className="w-full">
                <Banner />
                <Banner2 />
            </div>
            {/* Centered Content */}
            <div className="w-[85%] md:w-[90%] mx-auto">
                <RecentCars />
                <ClientReview />
                <SpecialOffers />
            </div>
        </div>
    );
};

export default Home;
