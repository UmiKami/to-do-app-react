import { useState } from 'react';
import './styles/App.css'

// Components
import Clock from './components/Clock';
import TaskInput from "./components/TaskInput";
import Task from "./components/Task"

function App() {
  const [inputValue, setInputValue] = useState("")
  const [tasks, setTasks] = useState([])

  return <>
    <Clock/>
    <main className="main-content">
      <h1 className="app-name">To-Do App</h1>
       <TaskInput setInputValue={setInputValue} inputValue={inputValue} setTasks={setTasks} tasks={tasks}/>
       {
        //  Loop thru tasks array [] which contains objects
         tasks.map(({text, completed, id})=>(
            <>
              <Task text={text} comepleted={completed} key={id}/>
            </>
         ))
       }
    </main>    
  </>
}

export default App;
