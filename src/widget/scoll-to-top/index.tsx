import { useEffect, useState } from 'react'

import { cn } from 'shared/utils'

const ScrollToTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
  }, [])
  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }}
      className={cn(
        'fixed bottom-5 right-5 rounded-full bg-gray-600 p-2 text-white shadow-md transition-transform',
        show ? 'translate-y-0' : 'translate-y-16'
      )}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M5 10l7-7m0 0l7 7m-7-7v18'
        />
      </svg>
    </button>
  )
}

export default ScrollToTop
