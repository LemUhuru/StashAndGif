import React from 'react';
import Gif from './Gif';

const GifList = props => {
    const { handleGifClick, gif, gifLimit } = props;
    const { gifs } = gif;
    const gifIds = Object.keys(gifs);

    const renderGifList = gifIds
    .map(id => {
        const gif = gifs[id];
        const { title, images } = gif;
        const { original: { url } } = images;
        
        return <li key={id}><Gif id={id} title={title} url={url} /></li>;
    });
    
    return (<ul onClick={handleGifClick} className="gif-list">
                {gifLimit ? renderGifList.slice(0, gifLimit) : renderGifList}
            </ul>)
};


export default GifList;