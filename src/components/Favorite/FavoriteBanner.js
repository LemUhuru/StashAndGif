import React, { Component } from 'react';
import FavoriteGifList from './FavoriteGifList';
import SectionDivider from '../Shared/SectionDivider';

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
        
        return (
            <div className={`favorite-banner ${stickyBanner && 'sticky-banner'}`}>
                <FavoriteGifList />
                <SectionDivider variant="inset" />
            </div>
        )
    };
};

export default FavoriteBanner;