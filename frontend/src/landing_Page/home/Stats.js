import React from 'react';

function Stats() {
    return ( 
    <div className='container p-3'>
        <div className='row p-5'>
            <div className='col-6 p-5'>
                <h1>Trust with confidence</h1>

                <h2>Customer first always</h2>
                <p>Thats why 1.3+ crore customers 
                trust zerodha with  3.5+ lakh crore</p>
                <h2>No spam </h2>
                <p>Thats why 1.3+ crore customers 
                trust zerodha with  3.5+ lakh crore</p>
                <h2>The Zerodha universe</h2>
                <p>Thats why 1.3+ crore customers 
                trust zerodha with  3.5+ lakh crore</p>
                <h2>Do bette with money</h2>
                <p>Thats why 1.3+ crore customers 
                trust zerodha with  3.5+ lakh crore</p>
            </div>
            <div className='col-6 p-5'>
                <img src='media/images/ecosystem.png' style={{width:"90%"}}/>
                <div className='txt-center '>
                    <a href='' className='mx-5'>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                    <a href=''>Try kite <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Stats;