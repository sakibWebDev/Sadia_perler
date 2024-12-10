import React from 'react';
import Banner from './Banner';
import OurAwsomeServices from './OurAwsomeServices';
import ScreenProfesionaly from './ScreenProfesionaly';
import Testimonial from './Testimonial';
import Contractmessage from './Contractmessage';

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <OurAwsomeServices/>
            <ScreenProfesionaly/>
            <Testimonial/>
            <Contractmessage/>
        </div>
    );
};

export default Homepage;