import * as React from 'react';
import SectionDivider from './Shared/SectionDivider';
import Header from './Shared/Header';
import FavoriteGifList from './Favorite/FavoriteGifList';
import GifList from '../components/Gif/GifListContainer';
import Loader from '../components/Shared/Loader';

class App extends React.Component {
    render() {
        const { isPending, isError } = this.props;
        const showGifs = !isPending && !isError;
        console.log(this.props, 'hey im gifs');

        return (
            <div>
                <Header />
                <FavoriteGifList />
                <SectionDivider variant="inset" />
                {showGifs && <GifList />}
            </div>
        )
    };
};

export default App;