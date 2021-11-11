import React from 'react'
import Sidebar from './Sidebar'

const AdminLayout = ({ children, ...rest }) => {
  return (
    <div class="container-fluid">
      <div class="row">
        <Sidebar />
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-3 pb-2 mb-3">
            {children}
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
