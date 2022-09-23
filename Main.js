
import React, { useState } from 'react';
import Game from './Game';

function Main() {
  return (
    <div className="App">

      <Search />
    </div>
  );

}

const Search = () => {
const [sh, showval] = useState(false)
const onClick = () => showval(true)

const [player1name, p1state] = useState("");
const [player2name, p2state] = useState("");

return (
  <div>
    <br>
    </br>
    <label>Enter Player 1 Name (Red) : &nbsp;&nbsp;&nbsp;</label>
    <input type="text" onChange={e => p1state(e.target.value)}></input>
    <br>
    </br>
    <label>Enter Player 1 Name (Black) : </label>
    <input type="text" onChange={e => p2state(e.target.value)}></input>
    <br>
    </br>
    <br>
    </br>
    
    <input className="button" type="button" value="Start Game" onClick={onClick} />
    <br>
    </br>
    <br>
    </br>
    
    
    { sh ? <Game p1name={player1name} p2name={player2name}/> : null }
  </div>
)
}
export default Main;

