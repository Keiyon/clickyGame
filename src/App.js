import React, { Component } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import HelloBootstrap from "./components/HelloBootstrap";
import pics from "./Pictures.json";
import FriendCard from "./components/FriendCard";
// import "./components/Counter";

class App extends Component {
    state = {
        pics,
        photoClick: [],
        score: 0
    };
    
    // handlePicClick = event => {
    //     const picss = event.target.photo;
    //     const newState = { ...this.state};

        
    //     }
    // }

render() {
    return (
<div className="container">
<Navbar />
<Jumbotron />
<div className="wrapper">
    {this.state.pics.map(pics => (
        <FriendCard
        photoClick={this.photoClick}
        id={pics.id}
        key={pics.id}
        photo={pics.photo}
        />

    ))}
</div>

<HelloBootstrap />

</div>
);
    }
    
}


export default App;

