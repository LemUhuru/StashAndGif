import { connect } from 'react-redux';
import FavoriteBanner from './FavoriteBanner';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ gif }) => {

    return {
        gif,
    };
};


export default connect(
    mapStateToProps, 
    null)(FavoriteBanner);