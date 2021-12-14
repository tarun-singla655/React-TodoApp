import React from 'react';
import Todo from './Todo'
const TodoList = ({todos,setTodos,status,replaceTextHandler,setChangeId})=>{

    const changeValueHandler = (value)=>{
            setChangeId(value.id);
            setChangeId((state)=>{
                replaceTextHandler(value);
                return state;
            })
           
          
    }
    return (
        <>
        <div className="todo-container">
            <ul className="todo-list">
            {
               todos.map((todo)=> {
                if ((status === 'completed' && todo.completed === true ) || (status === 'uncompleted' && todo.completed === false) || (status === 'all')  ) {
                      return (
                        <Todo changeValueHandler = {changeValueHandler} key = {todo.id} setTodos = {setTodos} text = {todo.text} todos = {todos} todo = {todo} />
                      );
                  }
        
                return <></>
               })
            }  
            </ul>
        </div>
        </>
    );
}


export default TodoList;