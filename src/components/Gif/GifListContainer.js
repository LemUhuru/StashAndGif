import { connect } from 'react-redux';
import GifList from './GifList';
import { addFavoriteGif, removeFavoriteGif } from '../../modules/Gif/actions';

const mapStateToProps = ({ gif }) => {

    return {
        gif
    };
};

const mapDispatchToProps = dispatch => {

    return {
        addFavoriteGif: gif => dispatch(addFavoriteGif(gif)),
        removeFavoriteGif: id => dispatch(removeFavoriteGif(id)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps, 
    null)(GifList);