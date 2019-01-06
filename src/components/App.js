import * as React from 'react';
import Search from './Search';
import GifList from './GifList';
import SectionDivider from './SectionDivider';
import Header from './shared/Header';

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
                <Header />
                <Search />
                <SectionDivider variant="inset" />
                <GifList />
            </div>
        )
    };
};

export default App;