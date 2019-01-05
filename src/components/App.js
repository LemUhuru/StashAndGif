import * as React from 'react';
import Search from './Search';
import GifList from './GifList';
import Divider from '@material-ui/core/Divider';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gifs: {},
            favorites: {},
        };
    };

    render() {
        return (
            <div>
                <Search />
                <Divider variant="inset" />
                <GifList />
            </div>
        )
    };
};

export default App;