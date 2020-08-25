import React from 'react'
import {useForm} from 'react-hook-form'
import styled from 'styled-components'
import axios from 'axios'
import {connect} from 'react-redux'
import {loginUser} from '../actions/marketActions'
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux'


const StyledLogin = styled.div`
    border: 2px solid lightgrey;
    border-radius: 5px;
    width: 45%;
    height: 40vh;
    margin: 0 auto;
    margin-top: 10%;
    box-shadow: 1px 0px 12px 2px rgba(0,0,0,0.75);
    font-family: Verdana, Geneva, sans-serif;
    h2 {
        text-align: center;
        margin-top: 5%;
        font-size: 1.3rem;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 30px;
    }
    label {
        margin-bottom: 10%;
    }
`

export const LOGIN = "LOGIN"

const Login = (props) => {
    
    const dispatch = useDispatch()

    const {register, handleSubmit, setValue, errors } = useForm()

    const history = useHistory()

    const onSubmit = async (data) => {
        
        const user = {
            username: data.username,
            password: data.password
        }
        
        axios
        .post("https://african-market-place-bw.herokuapp.com/api/auth/login", user)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            console.log(res)
            history.push('/market')
            dispatch({type: LOGIN, payload: res.data})
        })
        .catch(err => {
            console.log(err)
        })
        setValue('username', '')
        setValue('password', '')
        
        
    }

    return (
        <StyledLogin>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Username:&nbsp;
                    <input 
                        type='text'
                        name='username'
                        placeholder='Username'
                        ref={register({required: true})}
                    />
                    {errors.username && <p>Username is required from login</p>}
                </label>
                <label>Password: &nbsp;
                    <input 
                        type='password'
                        name='password'
                        placeholder='Password'
                        ref={register({required: true})}
                    />
                    {errors.password && <p>Password is required for login</p>}
                </label>
                <button>Submit</button>
            </form>
        </StyledLogin>
    )
}


export default connect(null,{loginUser})(Login)