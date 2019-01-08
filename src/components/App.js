import * as React from 'react';
import SectionDivider from './Shared/SectionDivider';
import Header from './Shared/Header';
import FavoriteGifList from './Favorite/FavoriteGifList';
import GifList from '../components/Gif/GifListContainer';
import Loader from '../components/Shared/Loader';
import ErrorLabel from '../components/Shared/ErrorLabel';
import FaveButton from '../components/Favorite/FaveButton';

class App extends React.Component {
    render() {
        const { gif } = this.props;
        const { gifs } = gif;
        const { isPending, isError, errorMsg } = gif;
        const showGifs = !isPending && !isError && gifs; 

        return (
            <div>
                <Header />
                <FavoriteGifList />
                <SectionDivider variant="inset" />
                {isPending && <Loader />}
                {isError && <ErrorLabel errorMsg={errorMsg} isError={isError} />}
                {showGifs && <GifList />}
            </div>
        )
    };
};

export default App;