import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../../Utils/fetchAPI'

const Users = () => {
  
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(false);
  
  useEffect( () => {
    fetchAPI('https://jsonplaceholder.typicode.com/users?_limit=5')
    .then( (data) => {
      setUserList(data);
    })
    .catch( (err) => {
      setError(err);
    })
  }, [])

  let users = null;
  if(userList && userList.length > 0){
    users = userList.map( (user) => {
      return(
        <div key={user.id} style={{borderBottom: 'solid 1px #ccc'}}>
          <p>#{user.id} </p>
          <h3>{user.name}</h3>
          <p>{user.phone}</p>
        </div>
      )
    })
  }
  

  return(
    <div>
      <h2>Users | FETCH API Demo with mocks </h2>
      { 
        error? 
          <p>Sorry! Unable to Load Users. Try again later!!</p> 
          : 
          users
      }
    </div>
  )
}

export default Users