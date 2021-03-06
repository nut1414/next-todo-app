import axios from "axios"
import { useContext, useRef } from "react"
import RoundButton from "./RoundButton"
import { TasksContext, SetTasksContext, getTasks } from "./Todo.jsx"

const UserInput = () => {
  const tasks = useContext(TasksContext)
  const settasks = useContext(SetTasksContext)
  const nameref = useRef()
  const addtasks = (e) => {
    e.preventDefault()
    if (nameref.current?.value){
      const newTempTask = {_id: (new Date()).toISOString() ,name: nameref.current?.value, done:0}
      const newTempTasks = [...tasks,newTempTask]
      settasks(newTempTasks)
      axios.post('/api/add',{name:nameref.current?.value}).then((a) => {
        getTasks(settasks)
      })
    }
  }
  return (
  <div className="flex flex-row justify-center justify-items-center items-center">
    <form id="addform" action="/" onSubmit={addtasks}>
      <label className="self-center text-xl">Add Task: 
        <input ref={nameref} form="addform" required type="text" className="bg-neutral-50 drop-shadow-xl ring-2 ring-gray-100 rounded-full m-2 px-2 min-w-[50%] self-center focus:scale-[1.02] transition-all ease-in-out"></input>
        <RoundButton form="addform" rcolor='transparent'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </RoundButton>
      </label>
    </form>
    
  </div>
  )
}

export default UserInput