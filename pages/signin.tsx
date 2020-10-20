import React, { ChangeEvent, FC, FormEvent, useState } from 'react'

interface User {
  email: string
  password: string
}

const Signin: FC = () => {
  const userInitialValue = { email: '', password: '' }
  const [user, setUser] = useState<User>(userInitialValue)
  const [isLoadingForm, setIsLoadingForm] = useState<boolean>(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    const userInput = user
    userInput[name] = value
    setUser(userInput)
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
      <h4>Signin Page</h4>
      {isLoadingForm ? 'Loading...' : ''}
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <input name="email" type="email" onChange={handleChange} />
        <label>password</label>
        <input name="password" type="password" onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Signin
