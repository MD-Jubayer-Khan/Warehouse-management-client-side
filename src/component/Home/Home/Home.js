import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Banner from '../Banner/Banner';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='top-area'>
              
                 <Banner></Banner>
            </div>
           
           
            <Footer></Footer>
        </div>
    );
};

export default Home;