import React from 'react';
import logo from '../../../assets/images/logo.png'

const Logo = () => {
    return (
        <img
            className='hidden md:block'
            width='100'
            height='100'
            src={logo}
            alt=""
        />
    );
};

export default Logo;