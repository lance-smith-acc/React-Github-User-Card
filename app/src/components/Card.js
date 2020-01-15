import React from 'react';


const Card = props => {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.avatar_url} />
        </div>
    )

}

export default Card;