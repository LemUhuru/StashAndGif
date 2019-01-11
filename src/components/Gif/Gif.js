import React from 'react';
import FavoriteSection from '../Favorite/FavoriteSection';

const Gif = props => {
    const { title, url, id, placeholder } = props;
    
    return (
        <div className="gif">
            {!placeholder && <FavoriteSection gifId={id} />}
            <img id={id} alt={title} src={url} />
        </div>
    )
};

export default Gif;