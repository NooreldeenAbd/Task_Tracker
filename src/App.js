import {useState} from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTask] = useState([
    {
        id: 1,
        text: 'Hello User !',
        day: 'Right now',
        reminder: true,
    },
    {
        id: 2,
        text: 'Double Click a Task to Toggle Reminders',
        day: 'May 2nd at 1:00 pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Click The Add Button to Add a New Task :)',
        day: 'May 2nd at 1:01 pm',
        reminder: false,
    },
    {
      id: 4,
      text: 'Click The "X" to remove a Task',
      day: 'May 2nd at 1:01 pm',
      reminder: false,
    },
    {
      id: 5,
      text: 'This project was made as React practice',
      day: 'So there is no backend on this website',
      reminder: false,
  }
    
  ])


  //Add Task (no DB so task ID is randomized)
  const addTask = (task) =>{
    const id = Math.floor(Math.random() *10000 +1)
    const newTask = {id, ...task}
    setTask([...tasks, newTask])
  }


  //Delete Task
  const deleteTask = (id) =>{
    setTask(tasks.filter((task) => task.id !== id))
  }


  //Toggle Reminder
  const toggleReminder = (id) =>{
    setTask(tasks.map((task) => 
    task.id ===id ?
    {...task, reminder:!task.reminder} : task))
  }

  return (
    <div className="container">

     <Header onAdd={() => setShowAddTask(!showAddTask)} 
     showAdd={showAddTask}
     />

     {showAddTask && <AddTask onAdd={addTask}/>}

     {
     tasks.length > 0 ? 
     <Tasks tasks = {tasks} 
     onDelete = {deleteTask} onToggle = {toggleReminder}/>:
     'No Tasks To Show'
     }

    </div>
  );
}

export default App;
