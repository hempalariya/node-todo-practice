import React from 'react'

export default function Form({children, onSubmit}) {
  return (
    <form className='' onSubmit={onSubmit}>
      {children}
    </form>
  )
}
