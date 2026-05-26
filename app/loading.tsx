/* eslint-disable @next/next/no-img-element */
import React from 'react'

const loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <img src="/dots-loader.gif" alt="Loading..." />
    </div>
  )
}

export default loading