import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addFavoriteGif } from '../modules/FavoriteGif/actions';

import App from './App';

const mapStateToProps = ({ gif, faveGif }) => {
    return {
        gif,
        faveGif,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addFavoriteGif: gif => dispatch(addFavoriteGif(gif)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));