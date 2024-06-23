import { useInView } from 'react-intersection-observer'

import { useGetUserList } from 'shared/api/user'
import { ErrorCommunicate } from 'shared/ui/error-communicate'
import { getPageItems } from 'shared/utils'

import { UserListItem } from './item'
import { ItemSkeleton, SkeletonArray } from './skeleton'

export const UserList = ({
  search,
  updateSearch,
}: {
  search: string
  updateSearch: (value: string) => void
}) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGetUserList(search)
  const { ref } = useInView({
    onChange: (inView) => inView && hasNextPage && fetchNextPage(),
  })

  if (!search)
    return (
      <div className='my-5 text-center text-gray-400'>
        Your input is empty, please provide a username, for example{' '}
        <button
          className='font-bold underline'
          onClick={() => updateSearch('DanyloShyshkovskyi')}
        >
          DanyloShyshkovskyi
        </button>
      </div>
    )

  if (isLoading)
    return <div className='flex flex-col gap-5'>{<SkeletonArray />}</div>

  if (!data || error) return <ErrorCommunicate />

  if (getPageItems(data).length === 0)
    return (
      <div className='my-5 text-center text-gray-400'>
        No users found by search value <strong>{search}</strong>
      </div>
    )

  return (
    <div aria-label='user-list' className='flex flex-col gap-5'>
      {getPageItems(data).map((user) => (
        <UserListItem key={user.id} {...user} />
      ))}
      {hasNextPage && (
        <>
          <ItemSkeleton ref={ref} />
          <SkeletonArray count={3} />
        </>
      )}
    </div>
  )
}
