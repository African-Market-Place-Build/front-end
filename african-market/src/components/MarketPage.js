import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import styled from 'styled-components'
import Post from './Post'

const StyledMarket = styled.div`
    width: 100%;
    margin: 0 auto;
    .header{
       text-align: center; 
    }
    .posts{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const MarketPage = (props) => {
    console.log(props.user)
    
    const [items, setItems] = useState([])

    console.log(items)

    useEffect(() => {
        axiosWithAuth()
        .get('https://african-market-place-bw.herokuapp.com/api/items')
        .then((res) => {
            setItems(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    
    return (
        <StyledMarket>
            <div className='header'>
                <h1>Marketplace</h1>
            </div>
            <div className='posts'>
                {items.map(item => {
                return <Post key={item.id} item={item}/> 
                })}
            </div>
        </StyledMarket>
    )
}

const mapStateToProps = (state)  => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,{})(MarketPage);