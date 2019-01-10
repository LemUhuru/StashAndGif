import { connect } from 'react-redux';
import GifListWrapper from '../Gif/GifListWrapper';
import { addFavoriteGif, removeFavoriteGif, updateFavoriteGif } from '../../modules/FavoriteGif/actions';

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
        updateFavoriteGif: (id, faveGif) => dispatch(updateFavoriteGif(id, faveGif)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GifListWrapper);