import React from 'react'

import Addtodo from './components/Addtodo'
import Todos from './components/Todos'
const App = () => {
  return (
    <>
   
    <h1 className='flex justify-center font-bold text-3xl p-5'>Learn about redux Toolkit</h1>
    <Addtodo/>
    <Todos/>
    </>

  )
}

export default App