import React from 'react';
import Gif from './Gif';

const GifList = props => {
    const { handleGifClick, gif, gifLimit } = props;
    const { gifs } = gif;
    const gifIds = Object.keys(gifs);

    const handleOnDrag = event => {
        const { id } = event.target;
        console.log(`Drag Started: ${id}`);
        event.dataTransfer.setData('text/plain', id);
    };

    const renderGifList = gifIds
    .map(id => {
        const gif = gifs[id];
        const { title, images } = gif;
        const { original: { url } } = images;
        
        return <li className="gif-list__item draggable" draggable="true" onDragStart={handleOnDrag} key={id}><Gif id={id} title={title} url={url} /></li>;
    });
    
    return (<ul onClick={handleGifClick} className="gif-list">
                {gifLimit ? renderGifList.slice(0, gifLimit) : renderGifList}
            </ul>)
};


export default GifList;