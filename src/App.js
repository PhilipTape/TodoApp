import React, { Component } from 'react';
import './App.css';
import Todoitem from './Todoitem';
class App extends Component {
  
  
  state ={
    input:"",
    lists:[
      
    ] 
  }
  
  onChange=(e)=>{
    this.setState({
      input:e.target.value
    })
  };
  
  onKeyUp=(e)=>{
   if(e.key=== 'Enter')
   {
   let tmp = this.state.lists;
   tmp.unshift(this.state.input);
   this.setState({
    lists:tmp,
    input:""
      }); 
     }    
  };
  
  
deleteTask=(index)=>{
  return ()=>{
    var tmp = this.state.lists;
    tmp.splice(index,1);
    this.setState({
      
    });
  };
}
  
  render() {
  
  const formStyle={
    textAlign:"center"  
  
   
  };
  
  const inputStyle={
    width:"300px",
    height:"45px",
     borderStyle: "initial",
    borderRadius: "6px",
     textShadow: "0px 0px dimgray",
     boxShadow: "dimgray",
    fontSize: 'x-large',
    opacity: '10px'
 
   
  };
  
  
  var items = this.state.lists.map((item,i)=>{
 
    return(
 <Todoitem item={item} key={i} onDeleteTask={this.deleteTask(i)} />     
     
    )
    
  });
 

    return (
      <div className="conTainer" >
      <div className="App">
      
       <div className="todoAppHeader">TODOAPP</div>  
       <div style={formStyle}>
<br/>
       <input style={inputStyle} type="text" 
                                 onChange={this.onChange}
                                 placeholder="     Whats on your mind?"
                                 onKeyUp={this.onKeyUp}
                                 value={this.state.input}
                                 />
       </div>       
       </div>
       {items}
       </div>
      
      
      
    );
  }
}

export default App;