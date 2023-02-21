import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../styles/TaskList.css'
import toast from 'react-hot-toast';
const TaskList = ({ item }) => {
    const [update, setupdate] = useState(false)
    const [editTask, seteditTask] = useState(item.task)
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch({
            type: 'deleteTodo',
            payload: id
        })
        toast.success('Task Deleted ')
    }
    const handleUpdate = (e) => {
        seteditTask(e.target.value)
    }
    const handleEdit = (todo) => {
        if (update === false) {
            setupdate(!update)
        } else {
            dispatch({
                type: 'editTodo',
                payload: {
                    id: todo.id,
                    status: 'active',
                    task: editTask,
                    time: todo.time
                }
            })
            setupdate(!update)
            toast.success('Task Edited ')
        }


    }
    return (
        <div className='TaskList-wrap'>
            <div className='task'>
                {update ? <input type='text' value={editTask} onChange={handleUpdate} /> : item.task}
            </div>
            <div> <button onClick={() => handleEdit(item)}>E</button></div>
            <div><button onClick={() => handleDelete(item.id)}>D</button></div>
        </div>
    )
}

export default TaskList