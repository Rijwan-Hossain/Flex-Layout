import styled from 'styled-components' 

const DivHeader = styled.header`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;

    background: rgb(50, 50, 50);
`

const NavMenu = styled.nav` 
    height: 50px; 
` 

const IconSpan = styled.span`
    padding: 10px 20px;
    cursor: pointer;
    color: rgb(220, 220, 220);
` 

const NavUL = styled.ul`
    list-style-type: none; 
    /* margin-left: auto; */
`
const NavLi = styled.li`
    /* list-style-type: none; */
    display: inline-block;
    padding: 0px 15px;
    color: white;
    font-size: 16px;
    cursor: pointer;
` 

const SignInButton = styled.button`
    background: transparent;
    padding: 10px 20px; 
    border: 2px solid rgb(150, 150, 150);
    border-radius: 20px;
    color: white;
    cursor: pointer;
`

export { 
    DivHeader, 
    NavMenu, 
    IconSpan, 
    NavUL, 
    NavLi, 
    SignInButton
} 