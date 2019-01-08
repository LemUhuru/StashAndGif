import React from 'react';
import FavoriteSection from '../Favorite/FavoriteSection';

const Gif = props => {
    const { title, url, id } = props;

    return (
        <div className="gif">
            <FavoriteSection />
            <img id={id} alt={title} src={url} />
        </div>
    )
};

export default Gif;