import React from 'react'

export default function Input({type, placeholder, name, onChange}) {
  return (
    <input type={type} placeholder={placeholder} required name={name} onChange={onChange}/>
  )
}
