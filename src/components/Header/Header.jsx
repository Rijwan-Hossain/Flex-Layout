import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars  } from '@fortawesome/free-solid-svg-icons'

import { DivHeader, NavMenu, IconSpan, NavUL, NavLi, SignInButton } from './style'


function Header({navStateChanger}) { 
    return ( 
        <DivHeader> 
            <IconSpan onClick={navStateChanger}> 
                <FontAwesomeIcon icon={faBars} size='2x' /> 
            </IconSpan> 

            <NavMenu> 
                <NavUL> 
                    <NavLi>Home</NavLi> 
                    <NavLi>Product</NavLi> 
                    <NavLi>Order</NavLi> 
                </NavUL> 
            </NavMenu> 

            <SignInButton> 
                Signin 
            </SignInButton> 
        </DivHeader> 
    ) 
} 

export default Header;