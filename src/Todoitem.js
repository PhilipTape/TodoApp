import React,{Component} from 'react';
import deleteimage from './delete.png'
export default class Todoitem extends Component {
    
propTypes ={
item:React.PropTypes.string,
onDeleteTask:React.PropTypes.func
};
    render(){
        return (
             <div className="todoItem" >
      {this.props.item}
      <div className="iconDelete" onClick={this.props.onDeleteTask}><img src={deleteimage}/></div>
      </div>
            
            
        );
        
    }
    
}