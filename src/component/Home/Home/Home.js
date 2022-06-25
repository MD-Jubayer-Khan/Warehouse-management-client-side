import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import Banner from '../Banner/Banner';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='top-area'>
                 <Header></Header>
                 <Banner></Banner>
            </div>
           
           
            <Footer></Footer>
        </div>
    );
};

export default Home;