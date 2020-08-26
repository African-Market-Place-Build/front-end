import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { loginUser } from '../actions/marketActions'
import { useHistory } from 'react-router-dom'

const LoginBox = styled.div`
    position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
`
const UserBox = styled.div`
position: relative;
`

const H2 = styled.h2` 
   border: 1px solid ghostwhite;
    text-align: center;
    display: inline-block;
    padding: 10px;
    color:  ghostwhite;
    font-size: 12px;
    text-transform: uppercase;
    overflow: hidden;
    letter-spacing: 4px;
    text-align: center;    
`

const Input = styled.input`
 width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
`

const Button = styled.button`
    
    margin-left: 97px;
    text-align: center;
    display: inline-block;
    padding: 10px 20px;
    color:  black;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 40px;
    letter-spacing: 4px;
    &:hover {
        
        
     
        box-shadow: 0 0 5px #99bbff,
                    0 0 5px #99bbff,
                    0 0 15px #99bbff,
                    0 0 25px #99bbff;
                    
    }
`

const Login = (props) => {

    const { register, handleSubmit, setValue, errors } = useForm()

    const history = useHistory()

    const onSubmit = (data) => {

        const user = {
            username: data.username,
            password: data.password
        }

        props.loginUser(user)
        history.push('/market')
        setValue('username', '')
        setValue('password', '')
    }

    return (
        <LoginBox>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <UserBox>
                <label><H2>Username:</H2>&nbsp;
                    <Input
                        type='text'
                        name='username'
                        placeholder='Enter your username'
                        ref={register({ required: true })}
                    />
                    {errors.username && <p>Username is required from login</p>}
                </label>
                </UserBox>
                <UserBox>
                <label><H2>Password:</H2> &nbsp;
                    <Input
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        ref={register({ required: true })}
                    />
                    {errors.password && <p>Password is required for login</p>}
                </label>
                </UserBox>
                <Button>Login</Button>
            </form>
        </LoginBox>
    )
}


export default connect(null, { loginUser })(Login)