import React from 'react';
import Bannar from '../Bannar/Bannar';
import BannarSlider from '../BannarSlider/BannarSlider';
import Choose from '../Choose/Choose';
import Menubar from '../Menubar/Menubar';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <div className='pb-5' ><Menubar ></Menubar></div>
            <Bannar></Bannar>
            <BannarSlider></BannarSlider>
            <Choose></Choose>
            <Services></Services>
        </div>
    );
};

export default Home;