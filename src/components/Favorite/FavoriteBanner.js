import React, { Component } from 'react';
import FavoriteGifList from './FavoriteGifList';
import SectionDivider from '../Shared/SectionDivider';
import Logo from '../Shared/Logo';
import Button from '@material-ui/core/Button';

class FavoriteBanner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stickyBanner: false,
        };
    };

    handleOnScroll = event => {
        const scrollTop = window.scrollY;

        if (scrollTop > 250) {
            this.setState({ stickyBanner: true });
        } else {
            this.setState({ stickyBanner: false });
        };
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleOnScroll);
    };

    componentWillUnMount() {
        window.removeEventListener('scroll', this.handleOnScroll);
    };

    render() {
        const { stickyBanner } = this.state;
        const { gif: { favoriteGifs }, history } = this.props;
        console.log(history);
       
        return (
            <div className={`favorite-banner ${stickyBanner && 'sticky-banner'}`}>
                {!stickyBanner && 
                <Button 
                    onClick={() => history.push('/favorites')} 
                    variant="contained" 
                    color="primary" 
                    className={`favorite-banner__btn`}
                >
                   View Faves
                </Button>}
                <FavoriteGifList favoriteGifs={favoriteGifs} useSlider={true} />
                {stickyBanner && <Logo />}
                <SectionDivider variant="inset" />
            </div>
        )
    };
};

export default FavoriteBanner;