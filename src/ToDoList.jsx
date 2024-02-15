import { useState } from 'react'
import './App.css'

function ToDoList() {
  const [todos, setTodos] = useState(['Teach React', 'React Demo', 'Celebrate!'])

  const addNewItems = (event) => {
    event.preventDefault()
    const input = document.querySelector('input');
    const newToDos = input.value.split(",")
    //  We DON'T want to modify state directly -- it messes with React's re-rendering cycle
    // todos.push(newToDo) // DO NOT DO THIS!!
    // instead... concatenate the existing array and a new array that has one item in it -- the input.value
    setTodos(todos.concat(newToDos))
    input.value = ''
  }

  const removeToDoItem = (itemToRemove) => {
    // find the item to be removed (identify the index in the array) - use .findIndex
    const indexOfItem = todos.findIndex(todo => todo === itemToRemove)
    // make a copy of the array with the item removed -- use .toSpliced()
    const updatedArray = todos.toSpliced(indexOfItem, 1)
    // update the state with the new list
    setTodos(updatedArray)
  }

  return (
    <>
      <h2>My To Do List</h2>
      <form>
        <input type="text" name="todo"/>
        <button onClick={addNewItems}>Add</button>
      </form>
      <ul>
        {todos.map(todo => {
          return (
            <li>
              <button onClick={() => removeToDoItem(todo)}>X</button>
              {todo}
            </li>
          )
        }
        )}
      </ul>
    </>
  )
}

export default ToDoList
