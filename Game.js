import React, { Component } from 'react';
import Cell from './Cell';
import checkAll from './CheckAll';


class Game extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      player1: 1,
      player2: 2,
      
      presentplayer: null,
      p1nameval: this.props.p1name,
      p2nameval: this.props.p2name,
      board: [],
      finish: false,
      msg: '',
      count1:1,
      count2:1
    };
    this.play = this.play.bind(this);
    // this.count1 = this.play.bind(this);
    // this.count2 = this.play.bind(this);
  }
  
  initBoard() {
    
    let board = [];
    for (let r = 0; r < 6; r++) {
      let row = [];
      for (let c = 0; c < 7; c++) 
         row.push(null) 
      board.push(row);
    }
    
    this.setState({
      board: board,
      presentplayer: this.state.player1,
      finish: false,
      msg: '',
      count1:1,
      count2:1
    });
  }

  togglePlayer() {
    if(this.state.presentplayer === this.state.player1){
      // this.state.count1+=1
      this.setState({count1: this.state.count1+1})
      // this.setState({this.state.c1=this.state.c1+1})
      return this.state.player2;
    }
    if(this.state.presentplayer === this.state.player2)
    {
        // this.setState({count2:count2})
      // this.state.c2+=1;
      // this.state.count2+=1
      this.setState({count2: this.state.count2+1})
      return this.state.player1;
    }
  }
  
  play(c) {
    if (!this.state.finish) 
    {
      var board = this.state.board;
      for (let r = 5; r >= 0; r--) {
        if (!board[r][c]) {
          board[r][c] = this.state.presentplayer;
          break;
        }
      }

      let result = checkAll(board);
      if (result === this.state.player1) {
        this.setState({ board: board, finish: true, msg: this.state.p1nameval + '  Hurray! Red Wins!!! Total moves:' +this.state.count1 });
      }
      if (result === this.state.player2) {
        this.setState({ board: board, finish: true, msg: this.state.p2nameval + '  Hurray! Black Wins!!!'  +this.state.count2});
      }
      else {
        this.setState({ board: board, presentplayer: this.togglePlayer() });
      }
    } 
  }
  
  
  
  componentWillMount() {
    this.initBoard();
  }
  
  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.state.board.map((row, i) => (<EachRw key={i} row={row} play={this.play} />))}
          </tbody>
        </table>
        
        <h3 className="msg">{this.state.msg}</h3>
        
        <button className="button" onClick={() => {this.initBoard()}}>Restart</button>
      </div>
    );
  }
}


const EachRw = ({ row, play }) => {
  return (
    <tr>
      {row.map((cell, i) => <Cell key={i} value={cell} columnIndex={i} play={play} />)}
    </tr>
  );
};


export default Game;