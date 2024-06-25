import { Outlet } from 'react-router'

import ScrollToTop from 'widget/scoll-to-top'

import { Toaster } from 'shared/ui/sonner'

const Layout = () => {
  return (
    <main className='min-h-screen bg-gray-100'>
      <div className='container'>
        <Outlet />
        <ScrollToTop />
        <Toaster />
      </div>
    </main>
  )
}

export default Layout
