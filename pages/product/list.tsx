import React, { FC, useEffect, useState } from 'react'
import { Product } from 'types/product'

const ListProducts: FC = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const products = [
      {
        name: 'product 1',
        description: 'product 1 description',
        tags: [{ name: 'tag 1' }]
      },
      {
        name: 'product 2',
        description: 'product 2 description',
        tags: [{ name: 'tag 1' }, { name: 'tag 2' }]
      }
    ]
    setProducts(products)
  }, [])

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Tags</th>
            <th>Actions</th>
          </tr>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>
                {product.tags.map((tag, index) => (
                  <span key={index}>{tag.name}</span>
                ))}
              </td>
              <td>
                <button>add to cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListProducts
