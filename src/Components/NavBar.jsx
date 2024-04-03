import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
   <>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">CRUD || App</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">

      <li class="nav-item active">
        <Link class="nav-link" to="/">Add User </Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="show-users" >All User </Link>
      </li>
    </ul>
   
  </div>
</nav>
   </>
  )
}

export default NavBar
