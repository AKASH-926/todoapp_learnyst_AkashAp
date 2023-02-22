import React from 'react'
import AppTitle from '../components/AppTitle'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'
import '../styles/MainPage.css'
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { filterTodo } from '../redux/Reducers'

export const MainPage = () => {


    const TodoList = useSelector(state => state.TodoList)
    const filterstatus = useSelector(state => state.filterStatus)


    const dispatch = useDispatch()

    //function to handle filter the tasks from array where it dispatches a action filterTodo along with status.
    const handlefilter = (status) => {
        dispatch(filterTodo(status))
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
                <div className='totaltasks'>{filterTodos.length} TASKS PRESENT</div>
                <div className="filter-task">
                    <button className='witdh140' onClick={() => handlefilter('All')}>ALL TASKS</button>
                    <button className='witdh140' onClick={() => handlefilter('active')}>ACTIVE TASKS</button>
                    <button onClick={() => handlefilter('complete')}>COMPLETED TASKS</button>
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