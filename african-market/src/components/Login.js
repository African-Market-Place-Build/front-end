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
`

export const Login = (props) => {
    return (
        <StyledLogin>
            <h2>Login</h2>

        </StyledLogin>
    )
}