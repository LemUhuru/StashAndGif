import React from 'react';
import GifListWrapper from '../Gif/GifListWrapperContainer';
import Loader from '../Common/Loader';
import ErrorLabel from '../Common/ErrorLabel';
import FavoriteBanner from '../Favorite/FavoriteBanner';

const Home = props => {
    const { gif, history, faveGif, addFavoriteGif } = props;
    const { gifs } = gif;
    const { isPending, isError, errorMsg } = gif;
    const showGifs = !isPending && !isError && gifs; 

    return (
    <div className="container">
        <FavoriteBanner gifs={gifs} history={history} faveGif={faveGif} addFavoriteGif={addFavoriteGif} />
        {isPending && <Loader />}
        {isError && <ErrorLabel errorMsg={errorMsg} isError={isError} />}
        {showGifs && <GifListWrapper />}
    </div>);
};


export default Home;