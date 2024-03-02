'use client'
import React, { useEffect, useState } from 'react'
import moon from '../assets/Path.png'
import axios from 'axios'
import Link from 'next/link'
import useCounter from '@/zustant/countres'
const HomePAge = () => {
  const {getIdVal,idval} = useCounter();
  let [datas,setDatas]=useState<{
    id:number,
    imgUrl:string,
    name:string,
    ppulation:string,
    region:string,
    capitals:string,
    currons: string
  }[]>([])

  let axiosdata=async()=>{
    try {
      let res=await axios.get('http://localhost:3000/counters')
      let data=await res.data
      setDatas(data)
    } catch (error) {
      console.log(error);
    }
  }

  let func=(id:number)=>{
    getIdVal(id)
  }

useEffect(()=>{
  axiosdata()
  console.log(idval);
  
},[])


  return (
    <>
     <nav className='bg-[#2B3844]'>
        <div className="container">
          <div className="navbar w-full h-[80px] flex justify-between items-center text-white">
              <h1 className='text-[24px] font-extrabold'>Where in the world?</h1>
              <button className='flex justify-between items-center w-[108px]'>
              <i className='bx bxs-moon' ></i> 
                <p>Darh Mode</p>
              </button>
          </div>
        </div>
      </nav> 
      <div className='container'>
        <div className='w-full flex justify-between items-center h-[56px] mt-[48px]'>
            <input className='bg-[#2B3844] h-full w-[480px] pl-[74px] rounded-md' type="search" placeholder='Search for a country...' />

            <select className='bg-[#2B3844] w-[200px] h-[56px] pl-[24px]  pr-[24px] rounded-md' name="" id="">
              <option value="">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
        </div>
      </div>

      <section className='w-full mt-[48px]'>
          <div className="container">
            <div  className='w-full flex flex-wrap gap-[70px]'>
              {
                datas.map((e,i)=>(
                  <Link onClick={()=>func(e.id)} href='/detail' className='w-[264px] flex flex-col cursor-grabbing' key={i}>
                      <img className='w-[264px] h-[160px] rounded-md' src={e.imgUrl} alt="alt" />
                        <div className='w-full p-[24px] bg-[#2B3844]'>
                          <h2 className='text-[18px] mb-[16px]'>{e.name}</h2>
                          <p className='text-[12px] flex mb-[8px] items-center gap-x-2 text-slate-500'><p className='text-[#FFFFFF] text-[14px]'>Population:</p>{e.ppulation}</p>
                          <p className='text-[12px] flex mb-[8px] items-center gap-x-2 text-slate-500'><p className='text-[#FFFFFF] text-[14px]'>Region:</p>{e.region}</p>
                          <p className='text-[12px] flex mb-[8px] items-center gap-x-2 text-slate-500'><p className='text-[#FFFFFF] text-[14px]'>Capital:</p>{e.capitals}</p>
                        </div>
                  </Link>
                ))
              }
            </div>
          </div>
      </section>
    </>
  )
}

export default HomePAge
