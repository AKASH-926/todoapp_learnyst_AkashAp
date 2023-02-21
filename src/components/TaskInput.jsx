import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import toast from 'react-hot-toast';
export const TaskInput = () => {
    const [task, settask] = useState()
    const dispatch = useDispatch()

    function handleClick() {
        if (task) {
            dispatch({
                type: 'addTodo',
                payload: {
                    id: uuid(),
                    task,
                    time: new Date().toLocaleString()

                }
            })
            toast.success('Task Added Succesfully')
        } else {
            toast.error('Task cannot be Empty')
        }



    }


    return (
        <>
            <div>
                <input type="text" name="task" id="newtask" onChange={(e) => { settask(e.target.value) }} />
                <button onClick={handleClick}>ADD</button>
            </div>
        </>
    )

}

export default TaskInput



