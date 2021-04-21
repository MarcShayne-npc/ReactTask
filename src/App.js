import { useState } from 'react'
import Header from './components/Header'
import task from './components/Task'
import Tasks from './components/Tasks'

function App() {
  
  const [tasks, setTask] =useState([
    {
        id: 1,
        text: 'Doctor Appointment',
        day: 'April 30 at 1:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'School Appointment',
        day: 'April 29 at 2:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Something Appointment',
        day: 'April 31 at 1:30pm',
        reminder: true,
    },
])

//Delete Task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }

//Toggle Reminder
  const toggleReminder = (id) => {
    setTask(tasks.map((task) => task.id === id
    ? {...task, reminder : !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder}/>) 
      : ('No Tasks To Show')} 
    </div>
  );
}

export default App;
