import React, { useEffect, useState } from 'react'
import '../index.css'
import Jobcard from '../components/Jobcard'
import axios from 'axios'

const Homepage = () => {

  const [d, setD] = useState([])

  const fetchData = async () => {
    const response = await axios.get("/api/employe/internship/read/all")
    const { internships } = response.data
    setD(internships)
    console.log(internships)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='h-[100vh]'>
      <div>
        <div className='h-40  relative mt-16' >
          <h1 className='text-5xl text-zinc-700 font-bold absolute left-[50%] top-[5%] -translate-x-[50%]'>Make your dream career a reality</h1>
          <h3 className='text-3xl text-zinc-700 font-bold absolute left-[50%] top-[60%]
    -translate-x-[50%]'>Treanding on Internshala 🔥</h3>
        </div>
        <div id='behenkalabda' className='h-[30%] w-[100%]   flex  whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-mandatory px-28'>
          <div className='h-64 mr-14 shrink-0 snap-center w-96 bg-zinc-100 rounded-3xl bg-[url(https://internshala.com/static/images/pgc_course_specific_banners/pgc_homepage_banner_new.png)]
      bg-cover bg-no-repeat '></div>
          <div className='h-64 mr-14 shrink-0 snap-center w-96 bg-zinc-100 rounded-3xl bg-[url(https://internshala-uploads.internshala.com/banner-images/home_new/eoss_fh_jan24-student.png.webp)]
      bg-cover bg-no-repeat'></div>
          <div className='h-64 mr-14 shrink-0 snap-center w-96 bg-zinc-100 rounded-3xl bg-[url(https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp)]
      bg-cover bg-no-repeat'></div>
          <div className='h-64 mr-14 shrink-0 snap-center w-96 bg-zinc-100 rounded-3xl bg-[url(https://internshala-uploads.internshala.com/banner-images/home_new/aditya_birla_capital-student.png.webp)]
      bg-cover bg-no-repeat '></div>
          <div className='h-64 mr-14 shrink-0 snap-center w-96 bg-zinc-100 rounded-3xl bg-[url(https://internshala-uploads.internshala.com/banner-images/home_new/is_jobs-student.png.webp)]
      bg-cover bg-no-repeat'></div>
          <div className='h-64 mr-14 shrink-0 snap-center w-96 bg-zinc-100 rounded-3xl bg-[url(https://internshala-uploads.internshala.com/banner-images/home_new/isp_39-student.png.webp)]
      bg-cover bg-no-repeat'></div>
          <div className='h-64 mr-14 shrink-0 snap-center w-96 bg-zinc-100 rounded-3xl bg-[url(https://internshala-uploads.internshala.com/banner-images/home_new/int_opps-student.png.webp)]
      bg-cover bg-no-repeat'></div>
        </div>
      </div>
      <div className=' bg-zinc-100 mt-20'> <div>
        <div className='h-40  relative mt-16' >
          <h3 className='text-3xl text-zinc-700 font-bold absolute left-[50%] top-[50%]
-translate-x-[50%]'>Latest internships on Internshala</h3>
        </div>
        <Jobcard />
      </div>
      </div>
    </div>
  )
}
export default Homepage