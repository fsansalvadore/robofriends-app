import React from 'react';

const Hello = props => {
    return (
        <div>
            <h1>Robofriends App</h1>
            <p>Hi there {props.greeting}, this app is made in <strong>React</strong>.</p>
        </div>
        )
}

export default Hello;