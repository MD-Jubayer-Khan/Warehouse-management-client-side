import React from 'react';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import './Home.css';
import Footer from '../../shared/Footer/Footer'

const Home = () => {
    return (
        <div>
            <div className='top-area w-100'>
              
                 <Banner></Banner>
                 <InventoryItems></InventoryItems>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;