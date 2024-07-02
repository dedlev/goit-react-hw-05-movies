import React, { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Header, Link } from './Layoutstyled'
import { Loader } from 'ui/Loader';
import { STATUS } from 'constants/status.constants';

export const Layout = () => {
    const [status, setStatus] = useState(STATUS.IDLE);
  return (
    <Container>
       <Header>
          <Link to="/">Home</Link>        
          <Link to="/movies">Movies</Link> 
        </Header>
        <main>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </main>        
    </Container>
  );
};

