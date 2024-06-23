import { useEffect, useState } from 'react'

export const Blog = ({ blog }: { blog: string | null }) => {
  const [blogExist, setBlogExist] = useState(false)
  useEffect(() => {
    if (!blog) {
      return
    }
    const checkPDFExistence = async () => {
      try {
        const response = await fetch(blog)
        if (response.ok) {
          setBlogExist(true)
        }
      } catch (error) {
        console.log('Error checking Blog link:', error)
      }
    }

    checkPDFExistence()
  }, [blog])

  if (!blog) {
    return null
  }

  return (
    <div className='relative my-10 rounded-lg bg-gray-50 p-5 shadow-md'>
      <h2 className='mb-10 text-2xl font-bold'>Blog:</h2>
      {blogExist ? (
        <iframe src={blog} title='blog' className='h-screen w-full' />
      ) : (
        <div className='py-5 pb-10 text-center text-gray-400'>
          Blog can&apos;t be loaded. Please click{' '}
          <a
            className='text-gray-500 underline'
            href={blog}
            target='_blank'
            rel='noreferrer'
          >
            here
          </a>{' '}
          to open it.
        </div>
      )}
    </div>
  )
}
