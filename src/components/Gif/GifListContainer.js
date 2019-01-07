import { connect } from 'react-redux';
import GifList from './GifList';

const mapStateToProps = ({ gif }) => {
    return {
        gif
    };
};

export default connect(
    mapStateToProps, 
    null)(GifList);