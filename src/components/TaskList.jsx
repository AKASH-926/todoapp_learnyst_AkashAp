import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import '../styles/TaskList.css'
import toast from 'react-hot-toast';

import deleteIcon from '../assets/delete.png'
import editicon from '../assets/edit.png'
import editOk from '../assets/okay.png'
const TaskList = ({ item }) => {
    const [update, setupdate] = useState(false)
    const [editTask, seteditTask] = useState(item.task)
    const [checked, setchecked] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if (item.status === 'complete') {
            setchecked(true)
        } else {
            setchecked(false)
        }
    }, [item.status])


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
                    status: todo.status,
                    task: editTask,
                    time: todo.time
                }
            })
            setupdate(!update)
            toast.success('Task Edited ')
        }
    }
    const handleCheck = (todo, e) => {
        e.preventDefault()
        let currentStatus = ''
        if (todo.status === 'active') {
            currentStatus = 'complete'
            toast.success('Task marked as complete ')
        } else {
            currentStatus = 'active'
            toast.success('Task marked as Active ')
        }
        dispatch({
            type: 'checkTodo',
            payload: {
                id: todo.id,
                status: currentStatus,
                task: todo.task,
                time: todo.time
            }
        })

    }
    return (
        <div className='TaskList-wrap'>
            {checked ? <input type="checkbox" checked onChange={(e) => handleCheck(item, e)} /> :
                <input type="checkbox" onChange={(e) => handleCheck(item, e)} />}

            <div className='task'>
                {update ? <input type='text' value={editTask} onChange={handleUpdate} /> : item.task}
            </div>
            <div className='util-btns'> <button onClick={() => handleEdit(item)}> {update ? <img src={editOk} alt='edit' /> : <img src={editicon} alt='edit' />} </button>
                <button onClick={() => handleDelete(item.id)}> <img src={deleteIcon} alt="delete" /></button>
            </div>

        </div>
    )
}

export default TaskList