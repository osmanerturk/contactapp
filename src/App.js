import React from 'react'
import Contacts from "./components/Contacts"
import { Routes, Route } from "react-router-dom";
import Edit from './components/Contacts/Edit';

function App() {
  return (
    <div className='flex rounded-xl p-6 bg-slate-700 text-gray-400 justify-center items-center min-w-max max-w-max m-auto'>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App