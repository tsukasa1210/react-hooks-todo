import {
    useReducer,
    useEffect,
    useRef
  } from 'react'
  import { reducer } from '../reducer/reducer'
  import { initTodo } from '../actions/action'
  
  /**
   * カスタムフック
   * @params {String} jsonUri
   * @returns {Array} [todos]現在のTODOリスト, [dispatch]actionCreatorをReducerへ渡す関数
   */
  export const useRender = (jsonUri) => {
    const [todos, dispatch] = useReducer(reducer, [])
    const isFirstRender = useRef(true)
  
    useEffect(() => {
      const newTodos = {
        TODOS: [...todos]
      }
  
      // 初回レンダリング後の処理
      if (isFirstRender.current) {
        fetch(jsonUri)
        .then(response => {
          return response.json()
        })
        .then(init => {
          newTodos.TODOS = [init.TODOS]
          dispatch(initTodo(init.TODOS))
          isFirstRender.current = false
          return
        })
      }
  
      // ２回目以降のレンダリング後の処理
      fetch(jsonUri, {
        method: 'PUT',
        body: JSON.stringify(newTodos),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }, [jsonUri, todos])
  
    return [todos, dispatch]
  }
  export default useRender