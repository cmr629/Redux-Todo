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
 
        return(
            <div className='todo'>
                <div className={this.props.completedClass}>
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
        completed: state.completed,
    };
};

export default connect(mapStateToProps, { del, complete })(Todo)