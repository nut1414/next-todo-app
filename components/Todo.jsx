import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Task from './Task.jsx'
import Tasks from './Tasks.jsx'
import UserInput from './UserInput.jsx'

const testdata = [
  {id:'1a',name:'Test1',che:1},
  {id:'2a',name:'Test1Test1',done:1},
  {id:'3a',name:'Test1Test1Test1',done:1},
  {id:'4a',name:'Test1Test1Test1Test1',done:1},
  {id:'5a',name:'Test1Test1Test1Test1Test1',done:0},
  {id:'6a',name:'Test1Test1Test1Test1Test1Test1',done:1},
  {id:'7a',name:'Test1Test1Test1Test1Test1Test1Test1',done:1},
  {id:'8a',name:'Test1Test1Test1Test1Test1Test1Test1Test1',done:1},
  {id:'9a',name:'Test1Test1Test1Test1Test1Test1Test1Test1Test1',done:1},

]

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
  const [selected, setselected] = useState()
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