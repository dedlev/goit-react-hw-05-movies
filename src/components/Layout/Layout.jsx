import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Header, Link } from './Layoutstyled'

const Layout = () => {
  return (
    <Container>
       <Header>
          <Link to="/">Home</Link>        
          <Link to="/movies">Movies</Link> 
        </Header>
      <Outlet />
    </Container>
  )
}

export default Layout