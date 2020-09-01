import React from 'react'
import Todo from './Todo'

/**
 * Component
 * @param {Array} todos TODOリストオブジェクトの配列
 */
const TodoList = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <Todo index={index} key={index} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList