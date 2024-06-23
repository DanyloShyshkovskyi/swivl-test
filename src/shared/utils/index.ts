import { InfiniteData } from 'react-query'

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IUserListResponse } from 'shared/api/user'

export function cn(...inputs: any) {
  return twMerge(clsx(inputs))
}

export const getPageItems = (data: InfiniteData<IUserListResponse>) =>
  data.pages.flatMap((page) => page.items || page)
