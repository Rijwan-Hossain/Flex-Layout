import styled, {css} from 'styled-components' 

const ProductSection = styled.div` 
    align-self: stretch; 
    background: #f8f8f8; 
    /* padding: 20px;  */
    overflow-y: scroll; 
    ${props => css` 
        width: ${props => props.iconState ? '85%' : '100%'}; 
        transition: width 0.15s; 
    `} 
` 

export { 
    ProductSection, 
} 
