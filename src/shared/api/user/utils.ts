import { QueryFunctionContext, QueryKey } from 'react-query'

import { AxiosRequestConfig } from 'axios'

import { apiInstance } from '..'
import { IUserListResponse } from './interface'

const PER_PAGE = 20

export const queryFn = ({
  pageParam = 1,
  url,
  params,
}: QueryFunctionContext<QueryKey> & {
  url: string
  params?: AxiosRequestConfig['params']
}) =>
  apiInstance
    .get<IUserListResponse>(url, {
      params: {
        page: pageParam,
        per_page: PER_PAGE,
        ...params,
      },
    })
    .then((response) => response.data)

export const getNextPageParam = (
  lastPage: IUserListResponse,
  pages: IUserListResponse[],
  total_count: number | undefined
) => {
  const totalFetchedItems = pages.length * PER_PAGE
  const totalAvailableItems = total_count || lastPage.total_count

  if (totalFetchedItems < totalAvailableItems) {
    return pages.length + 1
  }

  return undefined
}
