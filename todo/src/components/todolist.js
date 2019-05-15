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
        this.props.add({value: this.state.inputValue, completed: false});
        this.setState({inputValue: ''});
    }

    renderToDo = () => {
        
        return (this.props.todos.map((todo, i) => { return (<Todo key={i} index={i} todo={todo} />) }));
    }
    
    render() {
        console.log('asdfar');
        return (

            <div className='todoList'>
                <header>
                    <form className='addTodo'>
                        <input value={this.state.inputValue} onChange={this.changeValue} type='text' />
                        <button onClick={this.addTodo}>Add</button>
                    </form>
                </header>
                {this.renderToDo()}
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