import { Skeleton } from 'shared/ui/skeleton'

export const SkeletonItem = () => (
  <div className='flex flex-col items-center justify-around gap-2 rounded-lg border-gray-400'>
    <Skeleton className='size-20 rounded-full' />
    <Skeleton className='h-4 w-20' />
  </div>
)

export const SkeletonArray = ({ count = 24 }: { count?: number }) =>
  Array.from({ length: count }).map((_, index) => <SkeletonItem key={index} />)
