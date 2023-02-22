import { createSlice } from '@reduxjs/toolkit';


// function to get the array from local storage of browser to set it in initialState if array present it returns else it sets an empty array in local storage.

function getInitialTodo() {

    const LocalTodos = window.localStorage.getItem('TodoList')
    if (LocalTodos) {
        return JSON.parse(LocalTodos)
    }

    window.localStorage.setItem('TodoList', JSON.stringify([]))
    return []
}

const initialState = {
    filterStatus: 'All',
    TodoList: getInitialTodo()
}

export const TodoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
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

        },
        deleteTodo: (state, action) => {
            const LocalList = window.localStorage.getItem('TodoList')
            if (LocalList) {
                const ListArr = JSON.parse(LocalList)
                ListArr.forEach((todo, index) => {
                    if (todo.id === action.payload) {
                        ListArr.splice(index, 1)
                        state.TodoList.splice(index, 1)
                    }
                })
                window.localStorage.setItem('TodoList', JSON.stringify(ListArr))
            }

        },
        editTodo: (state, action) => {
            const LocalList = window.localStorage.getItem('TodoList')
            if (LocalList) {
                const ListArr = JSON.parse(LocalList)
                ListArr.forEach((todo, index) => {
                    if (todo.id === action.payload.id) {
                        ListArr.splice(index, 1, action.payload)
                        state.TodoList.splice(index, 1, action.payload)
                    }
                })
                window.localStorage.setItem('TodoList', JSON.stringify(ListArr))
            }
        },

        checkTodo: (state, action) => {
            const LocalList = window.localStorage.getItem('TodoList')
            if (LocalList) {
                const ListArr = JSON.parse(LocalList)
                ListArr.forEach((todo, index) => {
                    if (todo.id === action.payload.id) {
                        ListArr.splice(index, 1, action.payload)
                        state.TodoList.splice(index, 1, action.payload)
                    }
                })
                window.localStorage.setItem('TodoList', JSON.stringify(ListArr))
            }
        },
        filterTodo: (state, action) => {
            state.filterStatus = action.payload
        }
    }

})

export const { addTodo, deleteTodo, editTodo, checkTodo, filterTodo } = TodoSlice.actions
