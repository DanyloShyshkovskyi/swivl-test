import { InfiniteData } from 'react-query'

import { AxiosError } from 'axios'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IUserListResponse } from 'shared/api/user'

export function cn(...inputs: any) {
  return twMerge(clsx(inputs))
}

export const errorTransformer = (error: unknown | Error) => {
  let message = 'An unknown error occurred'
  if (error instanceof AxiosError) {
    message = error.response?.data?.message || 'An unknown error occurred'
  }
  return `Server error: ${message}`
}

export const getPageItems = (data: InfiniteData<IUserListResponse>) =>
  data.pages.flatMap((page) => page.items || page)
