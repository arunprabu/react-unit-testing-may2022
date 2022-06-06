import React, { useEffect, useState } from 'react'

const Posts = () => {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((response) => {
        if (response.status === 200 || response.ok) {
          return response.json();
        } else {
          throw new Error(`HTTP error status: ${response.status}`);
        }
      })
      .then((jsonData) => {
        setPosts(jsonData);
      });
  }, []);


  return (
    <div>
      <h2>Posts</h2>
      
    </div>
  )
}

export default Posts