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
    fetch("../public/data.json").then((Response)=>Response.json()).then((json)=>setdata(json));
  },[]);

  if(!data) return <div>Loading..</div>

  return (
    <>
    <div>
      <div>
        <div>
          <img src={profile} alt="profile" />
        </div>
        <div>
          <About about={data.about}></About>
        </div>
      </div>

      <Skills skills={data.skills}></Skills>
      <Hobbies hobbies={data.hobbies}></Hobbies>
      <Passion passion={data.Passion }></Passion>
      <Academic academic={data.academic}></Academic>

    </div>
     
    </>
  )
}

export default App
