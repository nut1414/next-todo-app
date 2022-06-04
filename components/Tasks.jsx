import Task from "./Task.jsx"

const Tasks = ({tasks}) => {
  if (tasks.length)
  return (() => tasks.map((a,i) => (<Task checked={a.done} name={a.name} key={a._id} ind={i}/>)))()
}

export default Tasks