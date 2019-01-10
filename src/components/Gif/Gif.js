import React from 'react';
import FavoriteSection from '../Favorite/FavoriteSection';

const Gif = props => {
    const { title, url, id, placeholder } = props;
    // let imageUrl;

    // if (placeholder) {
    //     const placeholderId = `placeholder-${id}`;
    //     const placeholderUrl = `https://api.adorable.io/avatars/200/${placeholderId}`;
    //     imageUrl = placeholderUrl;
    // } else {
    //     imageUrl = url;
    // };

    return (
        <div className="gif">
            {!placeholder && <FavoriteSection gifId={id} />}
            <img id={id} alt={title} src={url} />
        </div>
    )
};

export default Gif;