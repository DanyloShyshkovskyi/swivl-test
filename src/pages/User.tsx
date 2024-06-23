import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'

import { Blog, RelatedUsers, UserPageSkeleton } from 'widget/user'

import { useGetUserDetail } from 'shared/api/user'
import { ErrorCommunicate } from 'shared/ui/error-communicate'

const Content = () => {
  const { id } = useParams()
  const { data, error, isLoading } = useGetUserDetail(id)

  if (isLoading) return <UserPageSkeleton />

  if (!data || error) return <ErrorCommunicate />

  const {
    login,
    name,
    avatar_url,
    followers,
    following,
    company,
    email,
    blog,
    bio,
  } = data
  return (
    <Fragment>
      <div className='flex flex-col gap-10 lg:flex-row'>
        <Avatar className='flex size-60 h-auto min-w-60 items-center justify-center rounded-lg bg-gray-50 p-5 shadow-lg'>
          <AvatarImage src={avatar_url} />
          <AvatarFallback>{login}</AvatarFallback>
        </Avatar>
        <div className='relative w-full rounded-lg bg-gray-50 p-10 shadow-lg'>
          <h1 className='mb-5 text-4xl font-bold'>{name}</h1>
          {bio && (
            <p className='mt-2 text-lg font-bold'>
              Bio: <span className='font-normal'>{bio}</span>
            </p>
          )}
          {company && (
            <p className='mt-2 text-lg font-bold'>
              Company: <span className='font-normal'>{company}</span>
            </p>
          )}
          {email && (
            <p className='mt-2 text-lg font-bold'>
              Email: <span className='font-normal'>{email}</span>
            </p>
          )}
          <span className='absolute right-3 top-3 text-xs font-bold text-gray-600'>
            {login}
          </span>
        </div>
      </div>
      <RelatedUsers
        title={'Followers'}
        path='followers'
        login={login}
        count={followers}
      />
      <RelatedUsers
        title={'Following'}
        path='following'
        login={login}
        count={following}
      />
      <Blog blog={blog} />
    </Fragment>
  )
}

export const Component = () => {
  return (
    <div aria-label='user-page' className='py-10'>
      <Link
        to='/user-list'
        className='mb-5 flex items-center gap-3 font-bold text-gray-900'
      >
        <svg
          width='15'
          height='15'
          viewBox='0 0 15 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z'
            fill='currentColor'
            fillRule='evenodd'
            clipRule='evenodd'
          ></path>
        </svg>
        Back to search
      </Link>
      <Content />
    </div>
  )
}
