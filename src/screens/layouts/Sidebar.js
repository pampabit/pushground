import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Auth from '../../api/Auth'
import { Home, ExitToApp, InsertDriveFile } from '@material-ui/icons';

const Sidebar = (props) => {
  const [context, setContext] = useContext(AppContext);
  const user = context.user

  return (
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse">
      <div class="sidebar-sticky pt-3">

        <div class="row mt-3">
          <div class="col-sm-12 logotype-container">
            <Link to='/'>
              <img src="https://app.pushground.com/assets/pushground.png" class="img-responsive" />
            </Link>
          </div>
        </div>

        <ul class="nav flex-column mt-5">
          <li class="nav-item mb-1">
            <Link to='/' className='nav-link'>
              <Home />
              <span>Inicio</span>
            </Link>
          </li>
          <li class="nav-item mb-1">
            <Link to='/blank' className='nav-link'>
              <InsertDriveFile />
              <span>Blank</span>
            </Link>
          </li>
          <li class="nav-item mb-1">
            <a
              href=""
              onClick={(e) => {
                e.preventDefault()
                Auth.logout()
                setContext({})
              }}
              class='nav-link'>
              <ExitToApp />
              <span>Salir</span>
            </a>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Sidebar
