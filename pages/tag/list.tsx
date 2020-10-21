import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'
import { Tag } from 'types/tag'

const ListTags: FC = () => {
  const router = useRouter()
  const [tags, setTags] = useState<Tag[]>([])

  useEffect(() => {
    setTags([{ name: 'tag1' }, { name: 'tag2' }, { name: 'tag3' }])
  }, [])

  return (
    <div>
      <h4>List tags</h4>
      <button onClick={() => router.back()}>voltar</button>
      <table>
        <tbody>
          <tr>
            <th>name</th>
            <th>Actions</th>
          </tr>
          {tags.map((tag, index) => (
            <tr key={index}>
              <td>{tag.name}</td>
              <td>
                <button>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListTags
