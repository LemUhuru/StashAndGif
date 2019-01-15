import React, { Component } from 'react';
import GifListWrapper from '../Gif/GifListWrapperContainer';
import Loader from '../Common/Loader';
import ErrorLabel from '../Common/ErrorLabel';
import FavoriteBanner from '../Favorite/FavoriteBanner';
import PaginateButton from '../Common/PaginateButton';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showStickyBanner: false,
            endOfPage: false,
        };
    }

    handleOnScroll = () => {
       const html = document.querySelector('html');
       const { scrollHeight, scrollTop, clientHeight } = html;
       const endOfPage = scrollHeight - scrollTop === clientHeight

        if (endOfPage) {
            this.setState({ endOfPage: true });
        }

        if (scrollTop > 230) {
            this.setState({ showStickyBanner: true });
        } else {
            this.setState({ showStickyBanner: false });
        };
    };


    componentDidMount() {
        window.addEventListener('scroll', this.handleOnScroll);
    };

    componentWillUnMount() {
        window.removeEventListener('scroll', this.handleOnScroll);
    };


    render() {
        const { showStickyBanner, endOfPage } = this.state;
        const { gif, history, faveGif, addFavoriteGif, fetchNextPage } = this.props;
        const { gifs, pagination, fetchNextPagePending } = gif;
        const { isPending, isError, errorMsg } = gif;
        const showGifs = !isPending && !isError && gifs;
        const showPaginateButton = showGifs && !fetchNextPagePending && endOfPage;

        return (
            <div className="container">
                <FavoriteBanner 
                    gifs={gifs} 
                    history={history} 
                    faveGif={faveGif} 
                    addFavoriteGif={addFavoriteGif}
                    showStickyBanner={showStickyBanner}
                />
                {isPending && <Loader />}
                {isError && <ErrorLabel errorMsg={errorMsg} isError={isError} />}
                {showGifs && <GifListWrapper />}
                {fetchNextPagePending && <Loader />}
                {showPaginateButton && <PaginateButton fetchNextPage={fetchNextPage} pagination={pagination} />}
            </div>
        );
    };
};


export default Home;