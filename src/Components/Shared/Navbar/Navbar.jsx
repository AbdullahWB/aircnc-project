import React from 'react';
import Container from '../Container';
import Logo from './Logo';
import Search from './Search';
import MenuDropdown from './MenuDropDown';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <div>
                            <Link to='/'><Logo></Logo></Link>
                        </div>
                        <div>
                            <Search></Search>
                        </div>
                        <div>
                            <MenuDropdown></MenuDropdown>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;