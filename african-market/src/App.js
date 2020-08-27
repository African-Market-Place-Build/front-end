import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import Login from './components/Login'
import SignUp from './components/Register'
import PrivateRoute from './components/PrivateRoute'
import MarketPage from './components/MarketPage'
import AddPost from './components/AddPost'
import UserProfile from './components/UserProfile'


const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  font-family: Helvetica, Arial, Sans-Serif;
  background: linear-gradient(grey,rgba(0,0,0,.5));
  
  h1{
    color: ghostwhite;
    font-size: 2rem;
    font-weight: lighter;
  }
  ul {
    display: flex;
    width: 40%;
    li {
      margin-left: 5%;
      margin-right: 5%;
      
    }
  }
  .link {
    color: black;
    text-decoration: none;
    color: white;
    font-weight: lighter;
    &:hover{
      color: tomato;
    }
  }
  .button{
    color: ghostwhite;
    text-decoration: none;
    padding: 3px;
    font-weight: lighter;
    
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
        <li>
        <Link className='button' to='/add'>Add Post</Link>
        </li>
        <li>
        <Link className='button' to='/profile'>User Profile</Link>
        </li>
      </ul>
      </StyledNav>
      <Switch>
        <PrivateRoute exact path="/market" component={MarketPage}/>
        <PrivateRoute exact path="/add" component={AddPost}/>
        <PrivateRoute exact path="/profile" component={UserProfile}/>
        <Route path="/register">
          <SignUp />
        </Route>
        <Route>
          <Login />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
