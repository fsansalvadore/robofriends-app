import React from 'react';

const card = () => {
    return (
        // <div>
        //     <img src="" alt="robot"></img>
        //     <h1>Robot Name</h1>
        //     <p>robot.email@gmail.com</p>
        // </div>
        <div>
            <div class="row">
            <div class="col s6 m3 l2">
            <div class="card">
                <div class="card-image">
                    <img src="https://robohash.org/lol" />
                    <span class="card-title">Card Title</span>
                    </div>
                    <div class="card-content">
                    <p>Robot Brown</p>
                    </div>
                    <div class="card-action">
                    <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default card;