import React, { useState } from 'react'

export default function page() {

  

  return (
    <>
      <div className='grid grid-cols-4 mt-[100px]'>

        <div className='col-span-1 '>
          <div className='flex flex-col'>

          <h1 className='font-[500]'>Manage My Account</h1>
          <div className='pt-[10px] pb-[10px] flex flex-col gap-2'>
            <p className='text-[14px] opacity-70 pl-[20px] font-[500] cursor-pointer hover:text-hoverbtn'>My Profile</p>
            <p className='text-[14px] opacity-70 pl-[20px] font-[500] cursor-pointer hover:text-hoverbtn'>Address Book</p>
            <p className='text-[14px] opacity-70 pl-[20px] font-[500] cursor-pointer hover:text-hoverbtn'>My Payment Options</p>
          </div>
          <h1 className='font-[500]'>My Orders</h1>
          <div className='pt-[10px] pb-[10px] flex flex-col gap-2'>
            <p className='text-[14px] opacity-70 pl-[20px] font-[500] cursor-pointer hover:text-hoverbtn'>My Returns</p>
            <p className='text-[14px] opacity-70 pl-[20px] font-[500] cursor-pointer hover:text-hoverbtn'>My Cancellations</p>
          </div>
          <h1 className='font-[500]'>My Washlist</h1>
        <p className='text-[14px] opacity-70 pl-[15px] pt-[5px] font-[500] cursor-pointer hover:text-hoverbtn'>Lets See</p>
        </div>
        </div>

        <div className='col-span-3 bg-blue-600'>
            right

            </div>
      </div>
    </>
  )
}
