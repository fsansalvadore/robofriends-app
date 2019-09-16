import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchApp from './SearchApp';

const App = () => {
    return (
        <div className="tc">
            <h1>RoboFriends App</h1>
            <SearchApp />
            <CardList robots={robots} />
        </div>
    )
}

export default App;