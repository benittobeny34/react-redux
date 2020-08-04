import React, {Component} from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos';

class TodoApp extends Component{
    state = {
      todos:[
          {title:'castle on the hill',id:1},
          {title:'Wake up in the sky',id:2},
          {title:'I know i am supperfly',id:3},
      ]
    }
    addTodo = (todo) =>{
        let id = Math.random();
        todo.id = id;
        let todos = [...this.state.todos,todo];
        this.setState({
            todos:todos
        })
    }
    deleteTodo = (id) => {
      let todos = this.state.todos.filter(todo => {
        return id !== todo.id
      })
      this.setState({
            todos:todos
        })

    }
    render(){
        return(
            <div className="container">
                <h1 className="center red-text">Todo App</h1>
                <Todos todos={this.state.todos} deleteTodo ={this.deleteTodo}/>
                <AddTodo addTodo = {this.addTodo} />
            </div>
        )
    }

}

export default TodoApp;