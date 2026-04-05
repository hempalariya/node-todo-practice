import React from 'react'

export default function Form({children, onSubmit}) {
  return (
    <form className='w-1/2 mx-auto flex flex-col gap-2 items-center justify-center h-screen' onSubmit={onSubmit}>
      {children}
    </form>
  )
}
