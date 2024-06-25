import { useState } from 'react'

import Search from 'widget/search'
import UserList from 'widget/user-list'

export const Component = () => {
  const [search, setSearch] = useState('')

  return (
    <div aria-label='user-list-page'>
      <h1 className='mb-20 pt-20 text-center text-4xl font-bold'>
        GitHub User List
      </h1>
      <Search searchValue={search} onChange={setSearch} />
      <UserList search={search} updateSearch={setSearch} />
    </div>
  )
}
