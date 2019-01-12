const placeholderIds = [ 
    "placeholder-1", 
    "placeholder-2", 
    "placeholder-3", 
    "placeholder-4", 
    "placeholder-5",
];

function getGif(id, gifs = {}) {
    const gifIds = Object.keys(gifs);
    const gif = gifIds[id];

    return gif;
};

function getGifsAsArray(gifs = {}) {
    const gifIds = Object.keys(gifs);

    return gifIds.map(id => gifs[id]);
};

function isFavorited(id, favoriteGifs = {}) {
    const gifIds = Object.keys(favoriteGifs);
    
    return gifIds.includes(id);
};

function isPlaceHolder(id) {
    const isPlaceHolder = placeholderIds.includes(id);

    return isPlaceHolder;
};

export {
    getGif,
    isFavorited,
    getGifsAsArray,
    isPlaceHolder,
};