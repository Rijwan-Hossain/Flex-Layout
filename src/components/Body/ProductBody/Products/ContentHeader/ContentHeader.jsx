import React from 'react';
import styled from 'styled-components'

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`

const P = styled.p`
    color: ${(props) => props.color}; 
` 

function ContentHeader({title}) { 
    return ( 
        <Header> 
            <P color='rgb(30, 30, 30)'>{ title }</P> 
            <P color='rgb(31, 110, 163)'>View All</P> 
        </Header> 
    ) 
} 

export default ContentHeader;