import { Ref, forwardRef } from 'react'

import { Skeleton } from 'shared/ui/skeleton'

export const ItemSkeleton = forwardRef((_, ref: Ref<HTMLDivElement> | null) => (
  <div ref={ref} className='relative flex items-center gap-10 bg-gray-50 p-5'>
    <Skeleton className='size-20 rounded-full' />
    <div className='flex w-full justify-between'>
      <Skeleton className='h-6 w-40' />
      <Skeleton className='absolute right-3 top-3 h-4 w-20' />
      <Skeleton className='absolute bottom-3 right-3 h-4 w-4 rounded-full' />
    </div>
  </div>
))

export const SkeletonArray = ({ count = 10 }: { count?: number }) =>
  Array.from({ length: count }).map((_, index) => <ItemSkeleton key={index} />)
