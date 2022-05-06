import {FaTimes} from 'react-icons/fa'

const Task = ({ task, onDelete, showReinder,onToggle}) => {
  return (
    <div className={`task ${task.reminder ? ' reminder' : ''}`} onDoubleClick = {()=> onToggle(task.id)}>
        {/* <h3 key={tasks.id}>{tasks.text}</h3>
        <p> {tasks.day}</p> */}
        <h3>{task.text}  <FaTimes onClick={() => onDelete(task.id)} style={{color: 'red', cursor:'pointer'}} /></h3>
        <p> {task.day}</p>
        </div>
  )
}

export default Task

