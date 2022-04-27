
import Task from "./Task"


// const asks = () => {

//     const [tasks, setTasks] = useState([
//     {
//         id:1,
//         text: 'Doctors Appoinment',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true,
//     },
//     {
//         id:2,
//         text: 'Meeting at School',
//         day: 'Feb 6th at 1:30pm',
//         reminder: true,
//     },
//     {
//         id:3,
//         text: 'Food Shopping',
//         day: 'Feb 5th at 2:30pm',
//         reminder: false,
//     },
//     ])

// }

const Tasks = ({key,tasks,onDelete, onToggle}) => {

    
 
  return (

    <>
        {tasks.map((task,) => (
            // <h3 key={tasks.id}>{tasks.text} </h3>
        //    <Task text={task.text} key={task.id} day={task.day}  />

        <Task key={task.id} task ={task} onDelete = {onDelete} onToggle={onToggle}/>
        ))}

       {/* <Task /> */}
    </>
  )
}

export default Tasks