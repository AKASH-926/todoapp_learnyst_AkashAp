import { createReducer } from '@reduxjs/toolkit';


function getInitialTodo() {

    const LocalTodos = window.localStorage.getItem('TodoList')
    if (LocalTodos) {
        return JSON.parse(LocalTodos)
    }

    window.localStorage.setItem('TodoList', JSON.stringify([]))
    return []


}

const initialState = {
    TodoList: getInitialTodo()
}

export const customReducer = createReducer(initialState, {

    addTodo: (state, action) => {
        state.TodoList.push(action.payload)
        const LocalList = window.localStorage.getItem('TodoList')
        if (LocalList) {
            const ListArr = JSON.parse(LocalList)
            ListArr.push({
                ...action.payload
            })
            window.localStorage.setItem('TodoList', JSON.stringify(ListArr))
        } else {
            window.localStorage.setItem('TodoList', JSON.stringify([{ ...action.payload }]))
        }

    }
})