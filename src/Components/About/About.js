import React from 'react'

const About = () => {
  return (
    <div>About Unit Testing |  Testing simple fn</div>
  )
}

export const add = (a, b) => {
  if(typeof a === 'number' && typeof b === 'number'){
    return a + b;
  }else{
    return 'Wrong Input';
  }
}

export default About;