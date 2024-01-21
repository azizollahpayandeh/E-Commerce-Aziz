import Categories from '@/Components/Template/Categories/Categories'
import CategoryPicture from '@/Components/Template/CategoryPricture/CategoryPicture'
import MainSec from '@/Components/Template/MainSec/MainSec'
import ThisMonth from '@/Components/Template/ThisMonth/ThisMonth'
import Today from '@/Components/Template/Today/today'
import React from 'react'

export default function Home() {
  return (
    <div className=''>
      <MainSec/>
      <Today/>
      <Categories/>
      <ThisMonth/>
      <CategoryPicture/>
    </div>
  )
}
