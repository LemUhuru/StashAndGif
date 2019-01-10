import React from 'react';
import GifList from '../Gif/GifListContainer';
import Loader from '../Shared/Loader';
import ErrorLabel from '../Shared/ErrorLabel';
import FavoriteBanner from '../Favorite/FavoriteBannerContainer';

const Home = props => {
    const { gif, history } = props;
    const { gifs } = gif;
    const { isPending, isError, errorMsg } = gif;
    const showGifs = !isPending && !isError && gifs; 

    return (
    <div className="container">
        <FavoriteBanner history={history} />
        {isPending && <Loader />}
        {isError && <ErrorLabel errorMsg={errorMsg} isError={isError} />}
        {showGifs && <GifList />}
    </div>);
};


export default Home;