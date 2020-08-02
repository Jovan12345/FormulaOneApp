import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link to='/' className='headerButton'>
                Home
            </Link>
            <div className='right menu'>
                <Link to='/worldchamps' className='headerButton'>
                    World Champions
                </Link>
            </div>
        </div>
    );
};

export default Header;