import React, { useState } from 'react'
import AppTitle from '../components/AppTitle'
// import button from '../components/button'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'
import '../styles/MainPage.css'
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
export const MainPage = () => {


    const TodoList = useSelector(state => state.custom.TodoList)
    const filterstatus = useSelector(state => state.custom.filterStatus)


    const dispatch = useDispatch()
    const handlefilter = (status) => {
        dispatch({
            type: 'filterTodo',
            payload: status
        })
    }

    const filterTodos = TodoList.filter((item) => {
        if (filterstatus === 'All') {
            return true
        } else if (filterstatus === 'active') {
            return item.status === 'active'
        } else {
            return item.status === 'complete'
        }
    })


    return (
        <>
            <div className='Main-container'>
                <AppTitle>TODO APP</AppTitle>
                <TaskInput />
                <div className="filter-task">
                    <button onClick={() => handlefilter('All')}>SHOW ALL TASKS</button>
                    <button onClick={() => handlefilter('active')}>SHOW ACTIVE TASKS</button>
                    <button onClick={() => handlefilter('complete')}>SHOW COMPLETED TASKS</button>
                </div>
                <div>
                    {
                        filterTodos.map((item) => {
                            return (
                                <TaskList item={item} key={item.id} />
                            )
                        })
                    }

                </div>

            </div>
            <Toaster />
        </>

    )

}

export default MainPage