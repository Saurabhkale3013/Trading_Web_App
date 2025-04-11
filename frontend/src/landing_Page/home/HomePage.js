import React from 'react';

import Awards from './Awards';
import Education from './Education';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';


function HomePage() {
    return (
        <>
           
           <Hero/>
           <Awards/>
           <Stats/>
           <Pricing/>
           <Education/>
           <OpenAccount/>
          

        </>
      );
}

export default HomePage;