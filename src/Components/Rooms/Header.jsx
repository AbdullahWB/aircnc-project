import React from 'react';
import Heading from '../Heading/Heading';

const Header = () => {
    return (
        <>
            <Heading
                title='Veluvana Bali - Owl Bamboo House'
                subtitle='Sidmen, Indonesia'
            />
            <div className='w-full md:h[60vh] overflow-hidden rounded-xl'>
                <img
                    className='object-cover w-full'
src="https://www.nationsonline.org/gallery/Indonesia/Piaynemo-West-Papua.jpg" alt="header img" />
            </div>
        </>
    );
};

export default Header;