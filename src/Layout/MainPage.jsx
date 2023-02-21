import React, { Component } from 'react'
import AppTitle from '../components/AppTitle'
import FilterTask from '../components/FilterTask'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'
import '../styles/MainPage.css'

export class MainPage extends Component {
    render() {
        return (
            <div className='Main-container'>
                <AppTitle>TODO APP</AppTitle>
                <TaskInput />
                <div className="filter-task">
                    <FilterTask>SHOW ALL TASKS</FilterTask>
                    <FilterTask>SHOW ACTIVE TASKS</FilterTask>
                    <FilterTask>SHOW COMPLETED TASKS</FilterTask>
                </div>
                <div>
                    <TaskList />
                </div>

            </div>
        )
    }
}

export default MainPage