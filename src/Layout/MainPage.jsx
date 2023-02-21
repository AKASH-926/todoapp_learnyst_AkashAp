import React from 'react'
import AppTitle from '../components/AppTitle'
import FilterTask from '../components/FilterTask'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'
import '../styles/MainPage.css'
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux'
export const MainPage = () => {


    const TodoList = useSelector(state => state.custom.TodoList)

    return (
        <>
            <div className='Main-container'>
                <AppTitle>TODO APP</AppTitle>
                <TaskInput />
                <div className="filter-task">
                    <FilterTask>SHOW ALL TASKS</FilterTask>
                    <FilterTask>SHOW ACTIVE TASKS</FilterTask>
                    <FilterTask>SHOW COMPLETED TASKS</FilterTask>
                </div>
                <div>
                    {
                        TodoList.map((item) => {
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