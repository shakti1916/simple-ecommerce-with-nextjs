import React from 'react'
import sunglass_img from '../public/woman2.jpg'
import hat_img from '../public/mancap.jpg'
import headphone_img from '../public/headphones.jpg'
import Link from 'next/link'
import Image from 'next/image'



const Categories = () => {
  return (
    <div className="h-full w-full flex justify-center">
      <div  className="h-full w-10/12">
        <h2 className="mb-8 text-3xl text-[#333]">
          Categories
        </h2>
        <div className="h-full w-full flex items-center justify-between">
          <Link href="/category/sunglasses" className="h-[325px] w-[325px] relative">
            <Image src={sunglass_img} alt ="" className="object-cover h-full w-full"/>
            <span className="bg-orange-500 absolute bottom-0 left-0 text-white px-6 py-2 rounded-md">Sunglasses</span>
          </Link>
          <Link href="/category/headphone" className="h-[325px] w-[325px] relative">
            <Image src={headphone_img} alt ="" className="object-cover h-full w-full"/>
            <span className='bg-orange-500 absolute bottom-0 left-0 text-white px-6 py-2 rounded-md'>Headphone</span>
          </Link>
          <Link href="/category/hat&cap" className="h-[325px] w-[325px] relative">
            <Image src={hat_img} alt ="" className="object-cover h-full w-full"/>
            <span className='bg-orange-500 absolute bottom-0 left-0 text-white px-6 py-2 rounded-md'>Hat and Cap</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Categories