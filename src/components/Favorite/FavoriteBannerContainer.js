import { connect } from 'react-redux';
import FavoriteBanner from './FavoriteBanner';

const mapStateToProps = ({ gif, faveGif }) => {

    return {
        gif,
        faveGif,
    };
};


export default connect(
    mapStateToProps, 
    null)(FavoriteBanner);