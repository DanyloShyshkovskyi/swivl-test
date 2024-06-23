import { UseInfiniteQueryResult } from 'react-query'

import { IUserListResponse } from 'shared/api/user'
import { ErrorCommunicate } from 'shared/ui/error-communicate'
import { getPageItems } from 'shared/utils'

import { RelatedUsersItem } from './item'
import { SkeletonArray } from './skeleton'

const NoUsersFound = ({ title }: { title: string }) => (
  <div className='my-5 text-center text-gray-400'>
    Current user has no <strong>{title}</strong>
  </div>
)

const gridClass =
  'grid max-h-64 grid-cols-2 gap-5 overflow-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8'
export const Grid = ({
  isLoading,
  data,
  count,
  title,
  error,
  isFetchingNextPage,
}: UseInfiniteQueryResult<IUserListResponse, Error> & {
  count: number
  title: string
}) => {
  if (count === 0) return <NoUsersFound title={title} />
  if (isLoading) return <div className={gridClass}>{<SkeletonArray />}</div>
  if (count === 0 || !data) return <NoUsersFound title={title} />
  if (error) return <ErrorCommunicate />

  return (
    <div className={gridClass}>
      <div className='absolute right-5 top-5 flex gap-1 font-bold'>
        <span>{getPageItems(data).length}</span>
        <span>/</span>
        <span>{count}</span>
      </div>
      {getPageItems(data).map((user) => (
        <RelatedUsersItem key={user.id} {...user} />
      ))}
      {isFetchingNextPage && <SkeletonArray count={24} />}
    </div>
  )
}
