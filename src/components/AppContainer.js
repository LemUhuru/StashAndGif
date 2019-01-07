import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = ({ gif }) => {
    // const { gif } = state;

    return {
        gif,
    };
};

export default connect(mapStateToProps, null)(App);