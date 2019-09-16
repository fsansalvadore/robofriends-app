import React from 'react';


const card = ({name, email, id}) => {
    return (
        <div className="bg-light-green tc dib br3 ma2 pa3 grow bw-2 shadow-5">
            <img src={`https://robohash.org/"${id}"?150x150`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>   
        </div>
    )
}

export default card;