import React from 'react'
import { useDispatch } from 'react-redux'
import '../styles/TaskList.css'
import toast from 'react-hot-toast';
const TaskList = ({ item }) => {

    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch({
            type: 'deleteTodo',
            payload: id
        })
        toast.success('Task Deleted ')
    }
    return (
        <div className='TaskList-wrap'>
            <div className='task'>{item.task}</div>
            <div> <button>E</button></div>
            <div><button onClick={() => handleDelete(item.id)}>D</button></div>
        </div>
    )
}

export default TaskList