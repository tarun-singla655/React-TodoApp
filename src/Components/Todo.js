import React,{useRef} from 'react';
const Todo = ({setTodos,text,todos,todo,changeValueHandler})=>{
    const inputRef = useRef(null);
    const selectValueHandler = ()=>{
        changeValueHandler({text:inputRef.current.outerText,key:todo.id});
    }
    const deleteHandler = ()=>{
         setTodos(todos.filter((el)=> el.id !== todo.id ));
    }
    const completeHandler = () =>{
        
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
                return {...item, completed : !item.completed}
            }
            else{
                return item;
            }
        }))
       
    }
    return (
        <>
        <div className = "todo">
            <li onClick={selectValueHandler} ref={inputRef} className={`todo-item ${todo.completed ? "completed" : "" }`}>{text}</li>
            <button onClick = {completeHandler} className='complete-btn'><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className='trash-btn'><i className="fas fa-trash"></i></button>
        </div>
       </>
    )
};
export default Todo