import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addFavoriteGif } from '../modules/FavoriteGif/actions';
import { fetchNextPage } from '../modules/Gif/actions';

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
        fetchNextPage: (query, limit, offset) => dispatch(fetchNextPage(query, limit, offset)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));