import { useState } from 'react'

import './App.css'



function App() {
 const [todosForToday , setTodosForToday] = useState({
  title:"dinner",
  description:"make dinner for everyone",
  id:1
 })
 
  return (
    <>
      <div className="app">
        <h1>Vite app</h1>
        <p>{todo.id}</p>
        <p>{todo.title}</p>
        <p>{todo.description}</p>
        <PersonName firstName={"Bhaskar"} lastName={"King"} task={todo.title}/>
      </div>
    </>
  )
}

const PersonName = ({firstName, lastName, task})=>{
  return (
    <>
    <h1>{firstName} <br /> {lastName}</h1>
    <p>{task}</p>
    
    </>
    
  )
}

export default App
