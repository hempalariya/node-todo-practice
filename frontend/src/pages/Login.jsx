import React, { useState } from 'react'
import Form from '../components/Form'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Login() {

    const [loginInfo, setLoginInfo] = useState({
      email: "",
      password: "",
    });
  
    function handleInput(e) {
      const { name, value } = e.target;
      setLoginInfo((prev) => {
        return { ...prev, [name]: value };
      });
    }
  
  
    async function handleSubmit(e){
      e.preventDefault()
      const resposnse = await fetch('http://localhost:5000/user/login', {
        method : 'POST',
         headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      })
  
    }

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="email" placeholder="email" required name="email" onChange={handleInput}/>
      <Input type="password" placeholder="password" required name="password" onChange={handleInput}/>
      <Button type="submit">Login</Button>
    </Form>
  )
}
