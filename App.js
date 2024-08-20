import React,{useState} from 'react'
import Form from './components/Form'
import TodosList from './components/TodosList';


function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <div className='header'>
        <h1 py-2>
          Todo-App
        </h1>
        <div><Form todos={todos} setTodos={setTodos}/></div>
        <div><TodosList todos={todos} setTodos={setTodos}/></div>
      </div>

    </div>
  );
}

export default App;
