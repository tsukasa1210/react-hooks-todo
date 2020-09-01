import React, {
    useState,
    useContext,
  } from 'react'
  import { addTodo } from '../actions/action'
  import { DispatchContext } from './App'
  
  const Form = () => {
    const [value, setValue] = useState('')
    const dispatch = useContext(DispatchContext)
  
    const submitHandler = e => {
      e.preventDefault()
      if (!value) return
      dispatch(addTodo(value))
      setValue('')
    }
  
    return (
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="TODOを入力してください"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">TODOを登録</button>
      </form>
    )
  }
  
  export default Form