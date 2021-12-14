import './App.css';
import {useState} from 'react';
import Form from './Components/Form';
import TodoList from './Components/TodoList';


function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [changeId,setChangeId] = useState(new Date());
  const replaceTextHandler = (value)=>{
    setChangeId(value.key);
        setInputText(value.text)
      

  }
  return (
    <div className="App">
      <header>
      <h1>Tarun Todo App</h1>
      </header>
      <Form  status = {status} changeId = {changeId} setChangeId = {setChangeId}  todos = {todos} inputText = {inputText} setTodos = {setTodos} setInputText = {setInputText} setStatus = {setStatus} />
      <TodoList  setChangeId = {setChangeId} replaceTextHandler = {replaceTextHandler} status = {status} setTodos = {setTodos} todos = {todos} />
    </div>
  );
}















export default App;
