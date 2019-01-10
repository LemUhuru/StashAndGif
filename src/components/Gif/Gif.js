import React from 'react';
import FavoriteSection from '../Favorite/FavoriteSection';

const Gif = props => {
    const { title, url, id, placeholder } = props;
    // const placeholderUrl = `https://api.adorable.io/avatars/200/${id}`;
    // const imageUrl = placeholder ? placeholderUrl : url;

    return (
        <div className="gif">
            {!placeholder && <FavoriteSection gifId={id} placeholder={placeholder} />}
            <img id={id} alt={title} src={url} />
        </div>
    )
};

export default Gif;