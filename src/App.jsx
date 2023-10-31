import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import "./style.css"
import { TodoList } from "./TodoList"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}

//code to hit todo for every 10mins 
function hitURL() {
  // Replace 'YOUR_URL_HERE' with the URL you want to hit
  const url = 'https://easytodo-8nc2.onrender.com/';
  // Replace this with your code to make the HTTP request to the URL (e.g., using fetch, XMLHttpRequest, etc.)
  // For simplicity, I'll use fetch in this example.
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return `hit`;
    })
    .then(data => {
      // Process the response data if needed
      // console.log('Response:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
// Set an initial delay of 7 minutes (600,000 milliseconds) before the first request
const intervalTime = 7 * 60 * 1000; // 10 minutes in milliseconds

// Call the hitURL() function immediately (for the first time)
hitURL();

// Set up the interval to call the hitURL() function every 10 minutes
setInterval(hitURL, intervalTime);
