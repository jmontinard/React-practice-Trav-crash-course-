import {FaTimes, faTimes} from 'react-icons/fa'

const Task = ({ task}) => {
  return (
    <div className="task">
        {/* <h3 key={tasks.id}>{tasks.text}</h3>
        <p> {tasks.day}</p> */}
        <h3>{task.text} <FaTimes style={{color: 'red', cursor:'pointer'}} /></h3>
        <p> {task.day}</p>
        </div>
  )
}

export default Task