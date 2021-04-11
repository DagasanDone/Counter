import React ,{ Component } from 'react' ;

class Counter extends React.Component{
    constructor(){
      super();
      this.state = {count:0}
    }
  increase=(count)=>{
  this.setState({count:this.state.count+1})
  return count;
  }

  restart=(count)=>{
this.setState({count:0})
return count;
  }
  decrease=(count)=>{
    this.setState({count:this.state.count-1})
    return count;
  }
  render(){
    return(
      <div className="card">
        <h1>My Counter : {this.state.count}</h1>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.restart}>Restart</button>
        <button onClick={this.decrease}>Decrease</button>

      </div>
    )
  }
}
export default Counter;