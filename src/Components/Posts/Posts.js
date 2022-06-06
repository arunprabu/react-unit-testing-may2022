import React, { useEffect, useState } from 'react'

const Posts = () => {
  
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=4")
      .then((response) => {
        if (response.status === 200 || response.ok) {
          return response.json();
        } else {
          throw new Error(`HTTP error status: ${response.status}`);
        }
      })
      .then((jsonData) => {
        setPostList(jsonData);
      });
  }, []);

  return (
    <div style={{textAlign: 'left', padding: '20px'}}>
      <h2 data-testid='h2El'>Posts</h2>
      <select role='combobox'>
        <option>Select</option>
        <option>Sort By Post Id</option>
        <option>Sort By Date</option>
      </select>
      {
        postList.map( (post )=> {
          return(
            <div role="listitem" style={{backgroundColor: 'lightyellow'}} key={post.id}>
              <span>#{post.id}</span>
              <h3>{post.title}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default Posts