import React from 'react';
import { connect } from 'react-redux';
import { del, complete } from '../actions';
import './todo.css';

class Todo extends React.Component{
  
    doDeleted = (event) => {
        this.props.del(this.props.index);
    }

    doComplete = (event) => {
        this.props.complete(this.props.index);
    }

    render(){
        const completedClass = this.props.todo.completed ? 'todo-value completed' : 'todo-value';
        return(
            <div className='todo'>
                <div className={completedClass}>
                    {this.props.todo.value}
                </div> 

                <div className='buttons'>
                    <button onClick={this.doComplete}>Complete</button>
                    <button onClick={() => {this.doDeleted()}}>Delete</button> 
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        state: state,
    };
};

export default connect(mapStateToProps, { del, complete })(Todo)