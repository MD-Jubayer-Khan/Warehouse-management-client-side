import React from 'react';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import './Home.css';
import Footer from '../../shared/Footer/Footer'
import ExtraSection1 from '../../../Pages/ExtraSection1/ExtraSection1';
import ExtraSection2 from '../../../Pages/ExtraSection2/ExtraSection2';

const Home = () => {
    return (
        <div>
            <div style={{backgroundColor:'#54576d', height: '800px'}}>
              
                 <Banner></Banner>
                 <InventoryItems></InventoryItems>
            </div>
            {/* <h2>Something</h2> */}
            <ExtraSection1></ExtraSection1>
            <ExtraSection2></ExtraSection2>
            <Footer></Footer>
        </div>
    );
};

export default Home;