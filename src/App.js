import React, {useState} from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { name: "Blobby", isComplete: true },
    { name: "Blobby hahaha", isComplete: false },
    { name: "Ah oooh blobby blobby", isComplete: false }
  ])
  
  const [newTask, setNewTask] = useState('')

  const completeTask = ((index) => {
    const copyTasks = [... tasks]
    copyTasks[index].isComplete = true
    setTasks(copyTasks)
  })

  const taskNodes = tasks.map((task, index) => { 
    return(
        <li key={task} className={task.isComplete ? " blobbied" : " not-blobbied"}>
        <span>{task.name}</span>
        {task.isComplete ? <span className="completed">BLOBBY!</span> : 
        <button onClick={() => completeTask(index)}>Blobby</button>}</li> 
    )
})


  const handleTaskInput = (event) => {
    setNewTask(event.target.value) 
  }


  const saveNewTask = ((event) => {
    event.preventDefault()
    const copyTask = [... tasks] // ... = spread syntax loops over indeces and put them in their own lists
    copyTask.push({name: newTask, newTask, isPurchased: false})
    setTasks(copyTask)
    setNewTask('')
  })

  return (
    <div className="App">

      <h1>Mr Blobby's List</h1>
      <hr></hr>

      <ul>
        {taskNodes}
      </ul>

      <form onSubmit={saveNewTask}>
        <label htmlFor="new-task">Blobby blob: </label>   
          <input id="new-task" type="text" onChange={handleTaskInput} value = {newTask}/>                 
          <input type="submit" value="OoOo Blobby Blob" />       
      </form>

    </div>
  );
}

export default App;
