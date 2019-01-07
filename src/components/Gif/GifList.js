import React from 'react';

const GifList = ({ gif }) => {
    const { gifs } = gif;
    const isGifs = gifs && gifs.data;
    const renderGifList = isGifs && gifs.data.map(gif => {
        const { title, id, images } = gif;
        const { original: { url }} = images;

        return <li key={id}><img alt={title} src={url} /></li>
    });

    return <ul className="gif-list">{renderGifList}</ul>
};


export default GifList;