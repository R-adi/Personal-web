import React from 'react'

const Hobbies = ({hobbies}) => {
  return (
    <div>
       <h2 className='text-2xl font-bold mt-6'>Hobbies</h2>
       <ul className='list-disc list-inside'>
        {hobbies.map((hobby,index)=>(
            <li key={index}>{hobby}</li>
        ))}
       </ul>
    </div>
  )
}

export default Hobbies