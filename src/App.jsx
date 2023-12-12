import React from "react";
import { useState, useEffect } from "react";


const App = () => {
  const [todos, setTodos] = useState([]
    )
  
  useEffect(()=>{
    
    fetch("http://localhost:3000/todos",{method:"GET"}).then((response)=>{
      response.json().then((data)=>{
        console.log(data);
        setTodos(data)
      })

    })
  },[])

  


  return (
    <div className="App">
      {todos.map((todo)=>{
        return(
          <div className="result">
            {todo.title}
            <br />
            {todo.description}
          </div>
        )
      })}
    </div>
  )
}

export default App