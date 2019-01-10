import * as React from 'react';
import Header from './Common/Header';
import FavoritePage from './Favorite/FavoritePage';
import { Route } from 'react-router-dom';
import Home from './Home/Home';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Route exact path="/" render={props => <Home {...this.props} />} />
                <Route path="/favorites" render={props => <FavoritePage {...this.props } />} />
            </div>
        )
    };
};


export default App;