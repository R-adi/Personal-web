import { useEffect, useState } from 'react'
import './App.css'
import About from './components/About'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Passion from './components/Passion'
import Academic from './components/Academic'
import profile from "../public/m_patient.jpg"

function App() {
  const [data, setdata] = useState(null)

  useEffect(()=>{
    fetch("../data.json").then((Response)=>Response.json()).then((json)=>setdata(json));
  },[]);

  if(!data) return <div>Loading..</div>

  return (
    <>
    <div className='bg-gray-900 text-white min-h-screen flex flex-col items-center'>
      <div className='flex flex-col items-center w-full max-w-4xl'>
        <div className='w-1/2 flex justify-center mb-4 '>
          <img src={profile} className='w-65 h-65 rounded-full shadow-lg border-4 ' alt="profile" />
        </div>
        <div className='w-1/2'>
          <About about={data.about}></About>
        </div>
      </div>

      <Skills skills={data.skills}></Skills>
      <Hobbies hobbies={data.hobbies}></Hobbies>
      <Passion passion={data.passion }></Passion>
      <Academic academic={data.academic}></Academic>

    </div>
     
    </>
  )
}

export default App
