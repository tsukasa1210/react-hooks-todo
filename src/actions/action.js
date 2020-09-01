/*
 * actionCreator関数
 * dispatch関数を通じてreducerにオブジェクトして渡される
 * actionCreatorは必ずdispatchの引数として渡される
 * 使用例と展開イメージ
 * dispatch(addTodo(String))
 * dispatch({ type: 'ADD_TODO', text: String })
 * reducer(todos, { type: 'ADD_TODO', text: String }) => {...}
 */
export const initTodo = todos => {
    return {
      type: 'INIT_TODO',
      todos
    }
}
  
export const addTodo = text => {
    return {
      type: 'ADD_TODO',
      text
    }
}
  
export const removeTodo = index => {
    return {
      type: 'REMOVE_TODO',
      index
    }
}
  
export const toggleTodo = index => {
    return {
      type: 'TOGGLE_TODO',
      index
    }
}