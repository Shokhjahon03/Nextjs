'use client'
import useCounter from '@/zustant/countres';
import React from 'react'

const DetailPage = () => {
  const {getIdVal,idval} = useCounter();
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
      <div className="container">
      <button className='mt-[80px] mb-[80px] w-[136px] h-[40px] bg-[#2B3844] rounded-md'><i className='bx bx-left-arrow-alt'></i> Back</button>
      </div>
      <div>
        <div className="container">
              {
                idval.map((e,i)=>(
                  <div className='w-full flex items-center justify-between' key={i}>
                      <img className='w-[560px] h-[401px] rounded-md' src={e.imgUrl} alt="alt" />
                      <div className='w-[574px]'>
                        <p className='text-[32px] font-extrabold leading-[43.65px]'>{e.name}</p>
                        <div className='flex w-full justify-between mt-[23px]'>
                          <div>
                            <p className='text-[16px]'>Native Name: {e.name}</p>
                            <p className='text-[16px]'>Population: {e.ppulation}</p>
                            <p className='text-[16px]'>Region: {e.region}</p>
                            <p className='text-[16px]'>Sub Region: Western Europe</p>
                            <p className='text-[16px]'>Capitall: {e.capitals}</p>
                          </div>
                          <div>
                            <p className='text-[16px]'>Top Level Domain: .be</p>
                            <p className='text-[16px]'>Currencies: Euro</p>
                            <p className='text-[16px]'>Languages: Dutch, French, German</p>
                          </div>
                        </div>
                        <div className='mt-[68px] h-[28px] flex'>
                            <p className=''>Border Countries: </p>
                            <div className='flex pl-[16px] '>
                              <button className='w-[96px] bg-[#2B3844] rounded-sm  mr-[10px] text-[14px]'>France</button>
                              <button className='w-[96px] bg-[#2B3844] rounded-sm  mr-[10px] text-[14px]'>Germany</button>
                              <button className='w-[96px] bg-[#2B3844] rounded-sm  mr-[10px] text-[14px]'>Netherlands</button>
                            </div>
                        </div>
                      </div>
                  </div>
                ))
              }
        </div>
        
      </div>  
    </>
  )
}

export default DetailPage
