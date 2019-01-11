import React, { Component } from 'react';
import GifListWrapper from '../Gif/GifListWrapperContainer';
import Divider from '@material-ui/core/Divider';
import Logo from '../Common/Logo';
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

        if (scrollTop > 230) {
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
        const { faveGif, history } = this.props;
       
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
                <GifListWrapper isFaveList={true} faveGif={faveGif} gifLimit={5} />
                {stickyBanner && <Logo />}
                <Divider />
            </div>
        )
    };
};

export default FavoriteBanner;