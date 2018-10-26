import React from "react";
import "./FriendCard.css";





const FriendCard = props => (
    <div className="card" onClick = {props.photoClick}> 
        <div className="img-container">
            <img src={props.photo} />
        </div>


    </div>
);

export default FriendCard;