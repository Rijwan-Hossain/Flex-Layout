import React from 'react';
import styled from 'styled-components'

const Block = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    padding: 0 20px;

    & > * {
        margin-left: 15px;
        margin-bottom: 15px;
    }
` 



const SingleProducts = styled.div`
    flex: 1 1 14rem;
    height: 140px; 
    background: #fff; 
    border-radius: 5px;
    box-shadow: 0px 0px 3px 3px rgb(224, 224, 224);

    &:last-child {
        flex: 0 0 14rem;
    }

    @media (max-width: 575.99px) {
        &:last-child {
            flex: 1 1 14rem;
        }
    }
`

function MainContent({data}) { 
    return ( 
        <Block> 
            { 
                data.map((d, i) => { 
                    console.log(d);
                    return ( 
                        <SingleProducts key={i} />
                    ) 
                }) 
            } 
        </Block> 
    ) 
} 

export default MainContent;