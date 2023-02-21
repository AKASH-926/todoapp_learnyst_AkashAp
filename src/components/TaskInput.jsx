import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import toast from 'react-hot-toast';
export const TaskInput = () => {
    const [task, settask] = useState('')
    const dispatch = useDispatch()

    function handleClick(e) {
        e.preventDefault()
        if (task) {
            dispatch({
                type: 'addTodo',
                payload: {
                    id: uuid(),
                    status: 'active',
                    task,
                    time: new Date().toLocaleString()

                }
            })
            settask('')
            toast.success('Task Added Succesfully')
        } else {
            toast.error('Task cannot be Empty')
        }
    }


    return (
        <>
            <div>
                <input type="text" name="task" id="newtask" value={task} onChange={(e) => { settask(e.target.value) }} />
                <button onClick={handleClick}>ADD</button>
            </div>
        </>
    )

}

export default TaskInput



