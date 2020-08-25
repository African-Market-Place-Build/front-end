import React from 'react'
import {connect} from 'react-redux'


const MarketPage = (props) => {
    console.log(props.user)
    return (
        <div>AYYYEOO MARKET PAGE</div>
    )
}

const mapStateToProps = (state)  => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,{})(MarketPage);