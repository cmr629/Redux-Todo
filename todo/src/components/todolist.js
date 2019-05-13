import React from 'react';
import { connect } from 'react-redux';
import { add, del, complete } from '../actions';
import Todo from './todo';

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state= {inputValue: ''};
    }

    changeValue = (event) => {
        
        this.setState({inputValue: event.target.value});
    }

    addTodo = (event) => {
        event.preventDefault();
        const newTodo = {value: this.state.inputValue, completed: false};
        this.props.add({value: this.state.inputValue, completed: false});
        this.setState({inputValue: ''});
    }
    render() {
        return (

            <div className='todoList'>
                <header>
                    <form className='addTodo'>
                        <input value={this.state.inputValue} onChange={this.changeValue} type='text' />
                        <button onClick={this.addTodo}>Add</button>
                    </form>
                </header>
                {console.log(this.props)}
                {this.props.todos.map((todo, i) => { return <Todo completedClass={todo.completed ? 'todo-value completed' : 'todo-value'} key={i} isCompleted={todo.completed} index={i} todo={todo} /> })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};

export default connect(mapStateToProps, { add, del, complete })(TodoList)