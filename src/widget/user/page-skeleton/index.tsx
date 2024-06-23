import { Skeleton } from 'shared/ui/skeleton'

export const UserPageSkeleton = () => (
  <div className='w-full'>
    <div className='flex flex-col gap-10 lg:flex-row'>
      <div className='flex size-60 h-auto min-w-60 items-center justify-center rounded-lg p-5 shadow-lg'>
        <Skeleton className='h-full w-full' />
      </div>
      <div className='relative w-full rounded-lg bg-gray-50 p-10 shadow-lg'>
        <Skeleton className='mb-10 h-8 w-60' />
        <Skeleton className='mt-4 h-5 w-40' />
        <Skeleton className='mt-4 h-5 w-40' />
        <Skeleton className='mt-4 h-5 w-40' />
        <Skeleton className='absolute right-3 top-3 h-3 w-10' />
      </div>
    </div>
    <div className='relative my-10 rounded-lg bg-gray-50 p-5 shadow-md'>
      <Skeleton className='h-64 w-full' />
    </div>
    <div className='relative my-10 rounded-lg bg-gray-50 p-5 shadow-md'>
      <Skeleton className='h-64 w-full' />
    </div>
    <div className='relative my-10 rounded-lg bg-gray-50 p-5 shadow-md'>
      <Skeleton className='h-40 w-full' />
    </div>
  </div>
)
