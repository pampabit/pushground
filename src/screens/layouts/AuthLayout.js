import React from 'react'

export default function AuthLayout({ children, ...rest }) {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 col-md-5 auth-layout-left">
          {children}
        </div>
        <div class="col-sm-7 d-none d-md-block auth-layout-right">
        </div>
      </div>
    </div>
  )
}
