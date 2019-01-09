import { connect } from 'react-redux';
import FavoriteBanner from './FavoriteBanner';


const mapStateToProps = ({ gif }) => {

    return {
        gif,
    };
};


export default connect(
    mapStateToProps, 
    null)
    (FavoriteBanner);