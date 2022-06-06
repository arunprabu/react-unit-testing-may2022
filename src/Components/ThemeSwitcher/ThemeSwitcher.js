import React, { useState } from 'react'

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  const myTheme = {
    dark:{
      backgroundColor: '#000',
      color: '#fff'
    },
    light: {
      backgroundColor: '#fff',
      color: '#000'
    }
  }

  const handleToggleTheme = () => {
    const nextTheme = (theme === 'light'? 'dark': 'light');
    setTheme(nextTheme);
  }

  return (
    <div style={theme === 'light'? myTheme.dark: myTheme.light}>
      <h2>ThemeSwitcher | User Generated Event and Enzyme</h2>
      <p className="icon-star">Current Theme: {theme}</p>
      <button onClick={handleToggleTheme}>Switch Theme</button>
    </div>
  )
}

export default ThemeSwitcher