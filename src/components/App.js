import React, { createContext } from 'react'
import { useRender } from '../hooks/render'
import Form from './Form'
import TodoList from './TodoList'

export const DispatchContext = createContext()

const App = () => {
    const [todos, dispatch] = useRender('https://script.google.com/macros/s/AKfycbxd2Gu7-4zmmsN522IEVJB-lLauYTy9l1F3EaJemfMOwIpihww/exec')

    return (
        <div className="todo-wrap">
            <DispatchContext.Provider value={dispatch}>
            <TodoList todos={todos}/>
            <Form/>
            </DispatchContext.Provider>
            </div>
    )
}
export default App
