import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'


const Form = styled.form`
color: blue;`

const SignUp = () => {
    const { register, handleSubmit, errors } = useForm()
//Onsubmit
    const onSubmit = (data) => {

        const newUser = {
            name: data.name,
            email: data.email,
            password: data.password
        }
        console.log(newUser)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
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
        </Form>

    )

}

export default SignUp