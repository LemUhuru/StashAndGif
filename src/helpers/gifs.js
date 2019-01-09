function getGif(id, gifs = {}) {
    const gifIds = Object.keys(gifs);
    const gif = gifIds[id];

    return gif;
};

function isFavorited(id, favoriteGifs = {}) {
    const gifIds = Object.keys(favoriteGifs);
    
    return gifIds.includes(id);
};

export {
    getGif,
    isFavorited,
};