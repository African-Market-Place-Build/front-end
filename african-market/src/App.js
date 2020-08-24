import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import {Login} from './components/Login'
import SignUp from './components/Register'

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  font-family: Verdana, Geneva, sans-serif;
  ul {
    display: flex;
    width: 30%;
    li {
      margin-left: 5%;
      margin-right: 5%;
    }
  }
  .link {
    color: black;
    text-decoration: none;
    &:hover{
      color: tomato;
    }
  }
`

function App() {

  return (
    <div className="App">
      <StyledNav>
      <h1>African Marketplace</h1>
      <ul>
        <li>
          <Link className='link' to='/register'>Sign Up</Link>
        </li>
        <li>
          <Link className='link' to='/login'>Login</Link>
        </li>
        <li>
        <Link className='link' to='/market'>Market</Link>
        </li>
      </ul>
      </StyledNav>
      <Switch>
        <Route>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
