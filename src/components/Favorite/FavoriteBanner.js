import React, { Component } from 'react';
import FavoriteGifList from './FavoriteGifList';
import SectionDivider from '../Shared/SectionDivider';
import Logo from '../Shared/Logo';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    chip: {
      margin: theme.spacing.unit,
    },
  });

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
        const { gif: { favoriteGifs } } = this.props;
        
        return (
            <div className={`favorite-banner ${stickyBanner && 'sticky-banner'}`}>
                {!stickyBanner && <h2 className="favorite-banner-title">Fave Fives</h2>}
                <FavoriteGifList favoriteGifs={favoriteGifs} />
                {stickyBanner && <Logo />}
                {/* <Link className="favorites-page-link" to="/favorites">
                    <Chip label="See Faves" />
                </Link> */}
                <SectionDivider variant="inset" />
            </div>
        )
    };
};

export default withStyles(styles)(FavoriteBanner);