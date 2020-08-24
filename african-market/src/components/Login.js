import React from 'react'
import {useForm} from 'react-hook-form'
import styled from 'styled-components'

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

export const Login = (props) => {
    
    const {register, handleSubmit, setValue, errors } = useForm()

    const onSubmit = (data) => {
        console.log(data)
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
                        ref={register({required: true, pattern: /^\S+@\S+\.\S+$/})}
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