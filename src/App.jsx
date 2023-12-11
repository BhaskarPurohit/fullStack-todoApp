import React from "react";
import { useState, useEffect } from "react";


const App = () => {
  const [todos, setTodos] = useState({
    title:"go swim",
    description:"tair kar aa bhai",
    id:1
  })
  useEffect(()=>{
    console.log("hello from useEffect");
  },[])
  return (
    <div className="App">
      {todos.title}
      <br />
      {todos.description}
    </div>
  )
}

export default App