import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = ({ gif }) => {
    return {
        gif,
    };
};

export default connect(mapStateToProps, null)(App);