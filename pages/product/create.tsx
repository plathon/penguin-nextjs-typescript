import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { Product } from 'types/product'

const CreateProduct: FC = () => {
  const productInitialValues = {
    name: '',
    description: '',
    tags: []
  }
  const router = useRouter()
  const [product, setProduct] = useState<Product>(productInitialValues)
  const [isLoadingForm, setIsLoadingForm] = useState<boolean>(false)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const name = event.target.name
    const value = event.target.value
    const inputValues = product
    if (name === 'tags') {
      const tags = value.split(',')
      const trimmedTags = tags.map(tag => ({
        name: tag.trim()
      }))
      inputValues.tags = trimmedTags
    } else {
      inputValues[name] = value
    }
    setProduct(inputValues)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoadingForm(true)
    setTimeout(() => {
      setIsLoadingForm(false)
      console.log(product)
    }, 2000)
  }

  return (
    <div>
      <h4>Create product</h4>
      <button onClick={() => router.back()}>Voltar</button>
      <form onSubmit={handleSubmit}>
        {isLoadingForm ? 'Loading...' : ''}
        <label>name</label>
        <input name="name" type="text" onChange={handleChange} />
        <label>description</label>
        <textarea onChange={handleChange} name="description"></textarea>
        <label>Tags</label>
        <input name="tags" type="text" onChange={handleChange} />
        <button>create product</button>
      </form>
    </div>
  )
}

export default CreateProduct
