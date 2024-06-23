import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Link } from 'react-router-dom'

import { IUserListItem } from 'shared/api/user'

export const RelatedUsersItem = ({ login, avatar_url }: IUserListItem) => (
  <Link
    to={`/user/${login}`}
    className='flex flex-col items-center justify-around gap-2 rounded-lg border-gray-400'
  >
    <Avatar className='flex size-20 min-w-20 items-center justify-center overflow-hidden rounded-full'>
      <AvatarImage src={avatar_url} className='object-cover' />
      <AvatarFallback>{login}</AvatarFallback>
    </Avatar>
    <h3 className='break-all text-xl font-bold'>{login}</h3>
  </Link>
)
