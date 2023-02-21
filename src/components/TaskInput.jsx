import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
export const TaskInput = () => {
    const [task, settask] = useState()
    const dispatch = useDispatch()

    function handleClick() {
        dispatch({
            type: 'addTodo',
            payload: {
                task
            }

        })

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



