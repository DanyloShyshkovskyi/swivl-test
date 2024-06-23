import { useEffect, useState } from 'react'

import { useDebounce } from 'shared/hooks'
import { Input } from 'shared/ui/input'

interface SearchProps {
  searchValue: string
  onChange: (value: string) => void
}

export const Search = ({ searchValue, onChange }: SearchProps) => {
  const [value, setValue] = useState(searchValue)
  const debouncedCallback = useDebounce((value) => onChange(value), 500)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedCallback(e.target.value)
    setValue(e.target.value)
  }

  useEffect(() => {
    setValue(searchValue)
  }, [searchValue])

  return (
    <Input
      placeholder='User name or login ...'
      onChange={handleOnChange}
      value={value}
      className='mb-10 w-full rounded-lg border border-none bg-gray-50 p-7 shadow-md outline-none focus-visible:ring focus-visible:ring-gray-300'
    />
  )
}
