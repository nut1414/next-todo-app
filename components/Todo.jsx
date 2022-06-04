import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Task from './Task.jsx'
import Tasks from './Tasks.jsx'
import UserInput from './UserInput.jsx'


export const TasksContext = React.createContext()
export const SetTasksContext = React.createContext()

export const getTasks = async (settasks) => {
  const allTasks = axios.get('/api/list')
  allTasks.then((res) => {
    settasks(res['data'])
  })
}

const Todo = () => {
  const [tasks,settasks] = useState([])
  useEffect(() => {
    getTasks(settasks)
  }, [])

  return (
  <div className="mx-auto my-5 p-2 bg-white rounded-lg break-all max-w-2xl">
    <TasksContext.Provider value={tasks}>
      <SetTasksContext.Provider value={settasks}>
        <UserInput/>
        <Tasks tasks={tasks}/>
      </SetTasksContext.Provider>
    </TasksContext.Provider>
  </div>
  )
}
 
export default Todo