import axios from "axios"
import { useContext } from "react"
import RoundButton from "./RoundButton.jsx"
import { SetTasksContext, TasksContext, getTasks } from "./Todo.jsx"




const Task = ({name, checked, ind}) => {
  const tasks = useContext(TasksContext)
  const settasks = useContext(SetTasksContext)
  
  const updateCheck = () => {
    const tempNewState = tasks.map((a,i)=> {if(i==ind) {return {...a, done:!a.done}} else return a})
    settasks(tempNewState)
    axios.post('/api/edit',{id:tasks[ind]._id, done:!(tasks[ind].done)}).then((a) => {
      getTasks(settasks)
    })
    
  }
  
  const deleteTask = () => {
    const id = tasks[ind]._id
    const tempNewState = tasks.filter((a,i)=> i!=ind)
    settasks(tempNewState)
    axios.post('/api/remove',{id}).then((a) => {
      getTasks(settasks)
    })
  }

  const CheckBox = () => {
    if (checked) {
      return (
        <RoundButton color='green' colorFocus='green' rcolor='black' onClick={updateCheck}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </RoundButton>
      )
    }else{
      return (
        <RoundButton color='transparent' rcolor='black' onClick={updateCheck}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="transparent">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </RoundButton>
      )
    }
  }

  return (
    <div className="flex rounded-lg p-1 m-3 bg-neutral-100 px-3 sm:mx-1 md:mx-[5%] drop-shadow-xl hover:scale-[1.02] transition-all active:scale-[0.99]">
      <div className="flex basis-11/12 self-center" onClick={updateCheck}>
        <div className="pr-2 self-center">
          {CheckBox()}
        </div>
        <div className="basis-11/12 self-center drop-shadow-md select-none">
          {name}
        </div>
      </div>
      
      <div className="basis-1/12 text-right align-right self-center ">
        <RoundButton color='' rcolor='transparent' onClick={deleteTask}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        </RoundButton>
      </div>
    </div>
  )
}

export default Task