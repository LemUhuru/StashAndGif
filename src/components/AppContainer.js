import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './App';

const mapStateToProps = ({ gif }) => {
    return {
        gif,
    };
};

export default withRouter(connect(mapStateToProps, null)(App));