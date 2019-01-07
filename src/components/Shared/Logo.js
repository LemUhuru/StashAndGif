import React from 'react';
import { Link } from 'react-router-dom';

const Logo = props => {
    return (
        <span className="brand-name">
        <Link to="/">
            Stash & Gif
        </Link>
      </span>
    )
};

export default Logo;