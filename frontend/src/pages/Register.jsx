import React, { useState } from "react";
import Form from "../components/Form";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Register() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  function handleInput(e) {
    const { name, value } = e.target;
    setUserInfo((prev) => {
      return { ...prev, [name]: value };
    });
  }


  async function handleSubmit(e){
    e.preventDefault()
    const response = await fetch('http://localhost:5000/user', {
      method : 'POST',
       headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })

    if(!response.ok){
      console.log('internal server error')
    }

    const data = await response.json()
    console.log(data)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" placeholder="name" name="name" onChange={handleInput}/>
      <Input type="email" placeholder="email" name="email" onChange={handleInput}/>
      <Input type="text" placeholder="number" name="number" onChange={handleInput}/>
      <Input type="password" placeholder="password" name="password" onChange={handleInput}/>
      <Button type="submit">Register</Button>
    </Form>
  );
}
