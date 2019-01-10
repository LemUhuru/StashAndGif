import React, { Component } from 'react';
import FavoriteGifList from './FavoriteGifList';
import SectionDivider from '../Shared/SectionDivider';
import Logo from '../Shared/Logo';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    chip: {
      margin: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
      },
    input: {
        display: 'none',
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
        const { gif: { favoriteGifs }, classes: { button}, history } = this.props;
        console.log(history);
       
        return (
            <div className={`favorite-banner ${stickyBanner && 'sticky-banner'}`}>
                {!stickyBanner && 
                <Button 
                    onClick={() => history.push('/favorites')} 
                    variant="contained" 
                    color="primary" 
                    className={`favorite-banner__btn ${button}`}
                >
                   View Faves
                </Button>}
                <FavoriteGifList favoriteGifs={favoriteGifs} />
                {stickyBanner && <Logo />}
                <SectionDivider variant="inset" />
            </div>
        )
    };
};

export default withStyles(styles)(FavoriteBanner);