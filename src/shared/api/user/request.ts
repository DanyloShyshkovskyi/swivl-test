import { useInfiniteQuery, useQuery } from 'react-query'

// Import AxiosResponse type
import { apiInstance } from 'shared/api'

import { IRelationField, IUserDetail, IUserListResponse } from './interface'
import { getNextPageParam, queryFn } from './utils'

export const useGetUserList = (search: string) =>
  useInfiniteQuery<IUserListResponse, Error>(
    ['users', search],
    (queryContext) =>
      queryFn({
        ...queryContext,
        url: '/search/users',
        params: { q: `${search} in:login in:name` },
      }),
    {
      getNextPageParam: (lastPage, pages) =>
        getNextPageParam(lastPage, pages, lastPage.total_count),
      select: (data) => data,
      enabled: !!search,
    }
  )

export const useGetUserDetail = (login: string | undefined) =>
  useQuery<IUserDetail, Error>(
    ['user', login],
    async () => apiInstance.get(`/users/${login}`),
    {
      enabled: !!login,
    }
  )

export const useGetRelatedDetails = ({
  login,
  path,
  count,
}: {
  login: string | undefined
  count: number | undefined
  path: IRelationField
}) =>
  useInfiniteQuery<IUserListResponse, Error>(
    ['related-details', login, path],
    (queryContext) =>
      queryFn({
        ...queryContext,
        url: `/users/${login}/${path}`,
      }),
    {
      getNextPageParam: (lastPage, pages) =>
        getNextPageParam(lastPage, pages, count),
      select: (data) => data,
      enabled: !!login,
    }
  )
