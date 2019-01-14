import React from 'react';
import GifListWrapper from '../Gif/GifListWrapperContainer';
import Divider from '@material-ui/core/Divider';
import Logo from '../Common/Logo';
import Button from '@material-ui/core/Button';


const FavoriteBanner = props => {
    const { faveGif, history, showStickyBanner, gifs, addFavoriteGif } = props;

    const handleOnDragOver = event => {
        // Allow element to be dropped.
        event.preventDefault();
    }

    const handleOnDrop = event => {
        event.preventDefault();

        // Access dropped element
        const gifId = event.dataTransfer.getData('text/plain');
        const gif = gifs[gifId];

        if (gif) addFavoriteGif(gif);
    };

    return (
        <div
            onDrop={handleOnDrop} 
            onDragOver={handleOnDragOver}  
            className={`favorite-banner ${showStickyBanner && 'sticky-banner'}`}
            >
            {!showStickyBanner && 
            <Button 
                onClick={() => history.push('/favorites')} 
                variant="contained" 
                color="primary" 
                className={`favorite-banner__btn`}
            >
               View Faves
            </Button>}
            <GifListWrapper isFaveList={true} faveGif={faveGif} gifLimit={5} />
            {showStickyBanner && <Logo />}
            <Divider />
        </div>
    )
};

export default FavoriteBanner;


