import { connect } from 'react-redux';
import GifListWrapper from './GifListWrapper';
import { addFavoriteGif, removeFavoriteGif } from '../../modules/FavoriteGif/actions';

const mapStateToProps = ({ gif, faveGif }) => {
    return {
        gif,
        faveGif,
    };
};


const mapDispatchToProps = dispatch => {
    return {
        addFavoriteGif: gif => dispatch(addFavoriteGif(gif)),
        removeFavoriteGif: id => dispatch(removeFavoriteGif(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GifListWrapper);