import * as React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gifs: {},
            favorites: {},
        }
    }

    render() {
        return (
            <div>Hello, world</div>
        )
    }
}

export default App;