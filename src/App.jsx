import { useState } from 'react'
import './App.css'

import Card from './components/Card'
import UserForm from './components/UserForm'

const App = () => {
  const addNameHandler = (name) => {
    console.log('inside app.jsx');
    console.log(name);
  }

  const numbers = [1, 2, 3, 4, 5, 6]

  return (
    <>
      <div>
        <Card>
          <UserForm onAddName={addNameHandler} />
        </Card>
        {/* {numbers.map(i => <div key={i}>{i}</div>)} */}
      </div>
    </>
  )
}

export default App
