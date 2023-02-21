import React from 'react'
import '../styles/TaskList.css'
const TaskList = ({ item }) => {
    return (
        <div className='TaskList-wrap'>
            <div className='task'>{item.task}</div>
            <div> <button>E</button></div>
            <div><button>D</button></div>
        </div>
    )
}

export default TaskList