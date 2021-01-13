import styled, {css} from 'styled-components' 

const SelectionArea = styled.div` 
    align-self: stretch; 
    ${props => css` 
        width: ${props.iconState ? '15%' : '0%'}; 
        transition: width 0.15s; 
    `} 
` 

export { 
    SelectionArea 
} 