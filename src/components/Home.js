import React from 'react';
import GifList from '../components/Gif/GifListContainer';
import Loader from '../components/Shared/Loader';
import ErrorLabel from '../components/Shared/ErrorLabel';
import FavoriteBanner from '../components/Favorite/FavoriteBannerContainer';

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