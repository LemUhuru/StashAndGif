import * as React from 'react';
import Header from './Shared/Header';
import GifList from '../components/Gif/GifListContainer';
import Loader from '../components/Shared/Loader';
import ErrorLabel from '../components/Shared/ErrorLabel';
import FavoriteBanner from '../components/Favorite/FavoriteBannerContainer';

class App extends React.Component {
    render() {
        const { gif } = this.props;
        const { gifs } = gif;
        const { isPending, isError, errorMsg } = gif;
        const showGifs = !isPending && !isError && gifs; 

        return (
            <div>
                <Header />
                <FavoriteBanner />
                {isPending && <Loader />}
                {isError && <ErrorLabel errorMsg={errorMsg} isError={isError} />}
                {showGifs && <GifList />}
            </div>
        )
    };
};

export default App;