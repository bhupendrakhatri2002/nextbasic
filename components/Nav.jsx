import React from 'react'

const Nav = () => {
  return (
    <div className='h-[10vh] bg-black w-full text-white flex justify-between items-center p-5 text-xl font-bold'>
        <h1>Logo</h1>
        <div className='flex gap-5'>
            <h2>Home</h2>
            <h2>Product</h2>
            <h2>Service</h2>
            <h2>Contact</h2>
        </div>
    </div>
  )
}

export default Nav