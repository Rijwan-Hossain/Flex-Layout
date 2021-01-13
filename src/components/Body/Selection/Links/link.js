import styled from 'styled-components'


const P = styled.p` 
    margin: 20px 0 10px 20px; 
` 

const UL = styled.ul`
    list-style-type: none; 
`

const LI = styled.li`
    cursor: pointer;
    margin-left: 0px;
    padding-bottom: 5px;
    font-size: 16px;
    &:hover {
        background: linear-gradient(to right, white, rgb(200, 200, 200), rgb(200, 200, 200), rgb(150, 150, 150));
    }
`

export {
    P, 
    UL, 
    LI
}
