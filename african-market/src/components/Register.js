import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'


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

const SignUp = () => {
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = (data) => {

        const newUser = {
            name: data.name,
            email: data.email,
            password: data.password
        }
        console.log(newUser)
    }

    return (
        <LoginBox>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name: </label>
            <input type='text' placeholder='Your name' name='name' ref={register} />
            <label htmlFor="email">Email: </label>
            <input type='text'
                placeholder='Email'
                name='email'
                ref={register({required: true, pattern: /^\S+@\S+\.\S+$/})}/>
            {errors.email && <p>Requires a valid email address</p>}
            <label htmlFor="password">Password: </label>
            <input type='password' placeholder='Password'
                name='password'
                ref={register({ required: true, minLength: 8 })} />
            <input type='submit' />
            {errors.password && <p>Pasassword must be atleast 8 characters!</p>}
        </form>
        </LoginBox>
    )

}

export default SignUp