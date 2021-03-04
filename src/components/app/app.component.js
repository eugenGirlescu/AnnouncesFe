import React from 'react';
import './app.style.css';
import Title from '../title/title.component'

class App extends React.Component {
    render() {
        return(
            <div className="App">
                <Title/>
            </div>
        );
    }
}

export default App;