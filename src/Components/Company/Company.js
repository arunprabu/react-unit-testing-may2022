import React, { useState } from 'react'

const Company = (props) => {

  const [ myCountry, setMyCountry] = useState('');
  
  const handleCountryNameChange = (event) => {
    setMyCountry(event.target.value);
  }

  return (
    <div>
      <h2>Company | Testing Props, Events, States, Hooks, JSX and Snapshot </h2>
      <h3>Welcome to My Company's Official Website!</h3>
      <p data-testid="companyNameEl">{props.name}</p>

      <div data-testid="employeesCountEl" 
        style={{padding: '10px', 
      color: 'green'}}>
        Employees: 318000+
      </div>

      {/* TODO: Have JOIN NOW button for Test Spec #5*/}
      <button role="button" className="btn btn-primary">Join Cognizant</button>

      <br/>
      <input type='text' placeholder='Enter Country' 
        value={myCountry} onChange={handleCountryNameChange}/>
      <p>Head over to Cognizant {myCountry} Website!</p>

    </div>
  )
}

export default Company