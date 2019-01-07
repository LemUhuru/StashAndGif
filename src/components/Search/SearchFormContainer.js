import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import { fetchGifs } from '../../modules/Gif/actions';

const mapDispatchToProps = dispatch => {
    return {
        fetchGifs: query => dispatch(fetchGifs(query)),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(SearchForm);