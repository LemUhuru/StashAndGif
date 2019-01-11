import React from 'react';

/*
NTS-Refactor: Logic should be placed in Gif. 
Change component name to FaveIcon and set active class to
.gif fave-icon.active. Then a prop can be passed to a gif as 
props.isFave. Gifs fave state can be set on componentDidMount.
Will need to create GifListWrapper component to render
either GifList or FavoriteGifList and pass the appropriate handler 
and state to both.
*/

const FaveIcon = ({ gifId }) => <span id={gifId} className="fave-btn"></span>;


export default FaveIcon;