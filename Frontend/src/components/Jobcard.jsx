import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Jobcard = () => {

    const [d, setD] = useState([])

    const fetchData = async () => {
        const response = await axios.get('/api/employe/internship/read/all')
        const { internships } = response.data
        setD(internships)
        console.log(internships);
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <div>
      <div className='h-[44vh] w-[18vw] bg-zinc-400 rounded-xl mb-16 ml-20'>
      <h1>name: Harshit</h1>
      </div>
      {
        d.map((internships, index) => (
            <div className='h-[44vh] w-[18vw] bg-zinc-400 rounded-xl mb-16 ml-20'>
                <ul>
                    <li>{internships.duration}</li>
                    <li>{internships.profile}</li>
                </ul>
            </div>
        ))
      }
    </div>
  )
}

export default Jobcard
