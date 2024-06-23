import { Outlet } from 'react-router'

import { ScrollToTop } from 'widget/scoll-to-top'

const Layout = () => {
  return (
    <main className='min-h-screen bg-gray-100'>
      <div className='container'>
        <Outlet />
        <ScrollToTop />
      </div>
    </main>
  )
}

export default Layout
