import React, { ChangeEvent, FC, FormEvent, useState } from 'react'

interface User {
  name: string
  email: string
  password: string
}

const Signup: FC = () => {
  const userInitialValues = {
    name: '',
    email: '',
    password: ''
  }

  const [user, setUser] = useState<User>(userInitialValues)
  const [isLoadingForm, setIsLoadingForm] = useState<boolean>(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    const userIputed = user
    userIputed[name] = value
    setUser(userIputed)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoadingForm(true)
    setTimeout(() => {
      setIsLoadingForm(false)
      console.log(user)
    }, 2000)
  }
  return (
    <div>
      <h4>Signup Page</h4>
      {isLoadingForm ? 'Loading...' : ''}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input name="name" type="text" onChange={handleChange} />
        <label htmlFor="email">email</label>
        <input name="email" type="email" onChange={handleChange} />
        <label htmlFor="password">password</label>
        <input name="password" type="password" onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Signup
