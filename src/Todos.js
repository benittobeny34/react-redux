import React, {Component} from 'react';

const Todos = ({todos,deleteTodo}) => {
      const todoList = todos.map(todo => {
          return (
            <div className="collection-item" key={todo.id}>
                <div>
                 {todo.title}
                 <button className='right red-darken-2 red-text' onClick={() =>{deleteTodo(todo.id)}}>delete</button>
                </div>
            </div>
          )
      })
      return (
          <div className="collection">
                {todoList}
          </div>
          )
}

export default Todos;