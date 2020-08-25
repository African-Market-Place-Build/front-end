import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {registerUser} from '../actions/marketActions'

const Form = styled.form`
color: blue;`


const SignUp = (props) => {
    const { register, handleSubmit, errors, setValue } = useForm()


    const onSubmit = (data) => {

        const newUser = {
            username: data.username,
            email: data.email,
            password: data.password
        }
        props.registerUser(newUser)
        setValue('username', '')
        setValue('password', '')
        setValue('email', '' )
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">Username: </label>
            <input type='text' placeholder='Your name' name='username' ref={register} />
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
        </Form>

    )

}

export default connect(null,{registerUser})(SignUp);