import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className='bg-gray-20  shadow-sm'>
      <section className='flex   justify-around  space-x-60  px-28 py-6'>
        
        <div className="logo relative">
            <div className='w-[1rem] h-[1rem] rounded-full bg-pink-600 absolute left-6 top-[1rem] dot  animate-bounce'></div>
        <h3 className='logo text-[2.4rem] '>&.au</h3>
        </div>

        <section className="navContainer ">
          <section className="navLinks  flex  space-x-20  capitalize  font-medium  leading-[4rem]">
            
            <li ><Link to="/">home</Link></li>
            <li ><Link to="/About">About </Link></li>
            <li ><Link to="/Project">project</Link></li>
            <li ><Link to="/Contact">contact us</Link></li>
          
         
          </section>
        </section>
        </section>
    </section>
  )
}

export default Header