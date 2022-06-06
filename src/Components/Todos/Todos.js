import React, { useEffect, useState } from 'react'

const Todos = () => {

  const todosApiURL = 'https://jsonplaceholder.typicode.com/todos?_limit=6';
  const [todoList, setTodoList] = useState([]);

  // 1. connect with rest api and send a req 
      // 1.1 What's the REST API URL? https://jsonplaceholder.typicode.com/todos?_limit=6
      // 1.2 What is the Http Request Method? GET 
      // 1.3 What's the REST API client? fetch not axios
  
  useEffect( () => {
    
    const fetchTodos = async() => {
      const response = await fetch(todosApiURL);
      const responseJSON = await response.json();

      // 2. save the res array in todoList
      setTodoList(responseJSON); // updating state

    }
    fetchTodos();

  }, []);

  return (
    <div>
      <h2>Todos</h2>
      {/* // 3. loop thru and display  */}
      {
        todoList.map( (todo) => {
          return(
            <div key={todo.id} style={{borderBottom: 'solid 1px #ccc'}}>
              <p>#{todo.id} </p>
              <h3>{todo.title}</h3>
              <p>{todo.completed? 'Completed': 'Not Completed'}</p>
            </div>
          )
        })
      }
    </div>

  )
}

export default Todos