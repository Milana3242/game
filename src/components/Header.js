import React from 'react';
import { useSelector } from 'react-redux';

function Header(props) {
    const {points} = useSelector((state) => state.points);
console.log(points)
    return (
        <div className='Header'>
            <p>ВАШИ ОЧКИ:{points}</p>
        </div>
    );
}

export default Header;