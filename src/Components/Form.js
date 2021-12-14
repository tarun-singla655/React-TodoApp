import React from 'react'



const Form = ({setInputText,setTodos,todos,inputText,setStatus,status,changeId,setChangeId})=>{
 
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

  
    const submitTodoHandler = (e) =>{
          e.preventDefault();      
          let present = false;
          for(let i = 0;i<todos.length;i++)
          {
            if(todos[i].id === changeId)
            {
              present = true;  
            }
          }
          if(present)
          {
            setTodos(todos.map(el => (
              el.id===changeId? {...el, text:inputText}: el
        )))
            setChangeId(new Date());
          }
          else
          {
            setTodos([...todos,{text:inputText,completed:false,id:new Date()}]); 
          }
        setInputText("");
    }
    const statusHandler = (e)=>{
        setStatus(e.target.value);
    }
    const orderHandler = (e) =>{
      let stateSort = [...todos]
      if(e.target.value === 'text')
      {
        stateSort.sort((a,b) => (a.text > b.text) ? 1 : ((b.text > a.text) ? -1 : 0))
      }
      else if(e.target.value === 'date'){
        stateSort.sort((a,b) => (a.id.getTime() < b.id.getTime()) ? -1 : ((a.id.getTime() > b.id.getTime()) ? 1 : 0))
      }

      setTodos(stateSort)
      setTodos((state)=>{
        console.log(state);
        return state;
      })

    }
    return (
      <form>
      <input value = {inputText} type="text" className="todo-input" onChange={inputTextHandler} />
      <button onClick = {submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange = {statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      <div className="select">
        <select  selected = "date" onChange = {orderHandler} name="sort" className="filter-todo">
        <option value="date">Recent</option>
          <option value="text">text</option>
          {/* {/* <option value="completed">Completed</option> */}
          
        </select>
      </div>
    </form>
    
    ); 
}


export default Form;