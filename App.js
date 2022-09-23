// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route,NavLink} from "react-router-dom";
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Router>
        <div id="header">
          <h2 class="glow">Hurray Hurray Let's start!!</h2>
          <NavLink to="\">Welcome /\</NavLink>&nbsp;&nbsp;&nbsp;
          <NavLink to="/Main">Game!!</NavLink>&nbsp;&nbsp;
        </div>

        <Switch>
          <Route strict exact path="/">
            <Welcome/>
          </Route>

          <Route strict exact path="/Main">
            <Main/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}


const Welcome=()=> {
  return (
      <div id="para">
        <br/>
        {/* <div id="para heading">
          <h1>Overview of the Game</h1>
        </div> */}
        {/* <p> */}
            Game Connect 4 is a similar version of Tic-Tac-Toe. But here it has certain rules!!
            <p>It consists of 6*7 grid board and a two players</p>
            <p>Player 1 will choose one color and player 2 will choose another color</p>
            <p>The ball will drop to the lowest column available.</p>
            <p>The player is said to be win if the four tokens that are adjacent to each other, either</p>
            <p>vertically, horizontally, or diagonally.</p>
        {/* </p> */}
      </div>
  );
}
export default App;
