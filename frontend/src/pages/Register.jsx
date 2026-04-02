import React, { useState } from "react";

export default function Register() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    number: "",
  });

  function handleInput(e) {
    const { name, value } = e.target;
    setUserInfo((prev) => {
      return { ...prev, [name]: value };
    });
  }


  async function handleSubmit(e){
    e.preventDefault()
    const resposnse = await fetch('http://localhost:5000/user', {
      method : 'POST',
       headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })


  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="name" required name="name" onChange={handleInput}/>
      <input type="email" placeholder="email" required name="email" onChange={handleInput}/>
      <input type="text" placeholder="number" required name="number" onChange={handleInput}/>
      <button>add</button>
    </form>
  );
}
