import { useRouter } from 'next/router'
import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { Tag } from 'types/tag'

const CreateTag: FC = () => {
  const tagInitialValues = { name: '' }
  const [tag, setTag] = useState<Tag>(tagInitialValues)
  const [isLoadingForm, setIsLoadingForm] = useState<boolean>(false)
  const router = useRouter()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTag({ name: event.target.name })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoadingForm(true)
    setTimeout(() => {
      setIsLoadingForm(false)
      console.log(tag)
    }, 2000)
  }

  return (
    <div>
      <h4>Create Tag</h4>
      <button onClick={() => router.back()}>Voltar</button>
      {isLoadingForm ? 'Loading...' : ''}
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input name="name" type="text" onChange={handleChange} />
        <button>Save</button>
      </form>
    </div>
  )
}

export default CreateTag
