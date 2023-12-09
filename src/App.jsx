import { useState } from 'react'

import './App.css'



function App() {
  const [todo, setTodo] = useState(
     {
      title:"go gym",
      description:"lift heavy",
      id:1
    })

    setInterval(()=>{
      setTodo({
        title:"dinner",
        description:"dinner banao eggs",
        id:2
      })
    },2000)

 
  return (
    <>
      <div className="app">
        <h1>Vite app</h1>
        <p>{todo.id}</p>
        <p>{todo.title}</p>
        <p>{todo.description}</p>
      </div>
    </>
  )
}

export default App
