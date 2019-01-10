import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './App';

const mapStateToProps = ({ gif, faveGif }) => {
    return {
        gif,
        faveGif,
    };
};

export default withRouter(connect(mapStateToProps, null)(App));