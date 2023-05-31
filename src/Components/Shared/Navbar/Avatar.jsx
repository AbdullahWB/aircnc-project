import React, { useContext } from 'react';
import avatar from '../../../assets/images/placeholder.jpg'
import { AuthContext } from '../../../providers/AuthProvider';

const Avatar = () => {
    const {user} = useContext(AuthContext)
    return (
        <img src={user && user.photoURL ? user.photoURL : avatar} width='30' height='30' className='rounded-full' alt="" />
    );
};

export default Avatar;