import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import toast from 'react-hot-toast';
import addIcon from '../assets/add.png'
import '../styles/TaskInput.css'
import { addTodo } from '../redux/Reducers';

export const TaskInput = () => {


    const [task, settask] = useState('')
    const dispatch = useDispatch()

    //function to handle new task addition into array where it dispatches a action addTodo.

    function handleAdd(e) {
        e.preventDefault()
        if (task) {
            dispatch(
                addTodo({
                    id: uuid(),
                    status: 'active',
                    task,
                    time: new Date().toLocaleString()
                })
            )
            settask('')
            toast.success('Task Added Succesfully')
        } else {
            toast.error('Task cannot be Empty')
        }
    }


    return (
        <>
            <div className='input-wrap'>
                <input type="text" placeholder='Add your task here' value={task} onChange={(e) => { settask(e.target.value) }} />
                <button onClick={handleAdd}> <img src={addIcon} alt="add" /> </button>
            </div>
        </>
    )

}

export default TaskInput



