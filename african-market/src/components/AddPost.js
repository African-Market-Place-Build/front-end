import React from 'react'
import styled from 'styled-components'
import {useForm} from 'react-hook-form'

const StyledPostForm = styled.div`
    text-align: center;
`

const AddPost = (props) => {
    
    const {register, handleSubmit, setValue} = useForm()
    
    const onSubmit = (data) => {
        
        const newPost = {
            name: data.name,
            contactInfo: data.contactInfo,
            description: data.description,
            imageLink: data.imageLink,
            location: data.location,
            price: data.price
        }
        console.log(newPost)
        setValue('name', '')
        setValue('contactInfo', '')
        setValue('description', '')
        setValue('imageLink', '')
        setValue('location', '')
        setValue('price', '')
    }

    return (
        <StyledPostForm>
            <div>Add Post</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name:&nbsp;
                    <input 
                    type='text'
                    name='name'
                    ref={register}
                    /> 
                </label>
                <label>Contact Email:&nbsp;
                    <input 
                    type='text'
                    name='contactInfo'
                    ref={register}
                    /> 
                </label>
                <label>Description:&nbsp;
                    <input 
                    type='text'
                    name='description'
                    ref={register}
                    /> 
                </label>
                <label>Image Link:&nbsp;
                    <input 
                    type='text'
                    name='imageLink'
                    ref={register}
                    /> 
                </label>
                <label>Location:&nbsp;
                    <input 
                    type='text'
                    name='location'
                    ref={register}
                    /> 
                </label>
                <label>Price:&nbsp;
                    <input 
                    type='text'
                    name='price'
                    ref={register}
                    /> 
                </label>
                <button>Submit Post</button>
            </form>
        </StyledPostForm>
    )
}

export default AddPost;