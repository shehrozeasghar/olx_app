import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import LOGOO from '../olx_icon.png'
import styled from 'styled-components'
import {ButtonContainer} from './Button'
import Cart from './Cart'



export default class Navbar extends Component
{
    render()
    {
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/' >
                    <img src={LOGOO} className="navbar-brand" height='50px' />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' className="nav-link" >
                        Products
                        </Link>
                    </li>
                </ul>

                <Link to="/Cart" className="ml-auto" >
                    
                    <ButtonContainer>
                    <span className="mr-2">
                        <i class="fas fa-user-circle"/>
                    </span>
                    Sell
                    </ButtonContainer>
                </Link>
                <div className="lefty">
                {/* <Cart /> */}
                </div>
            </NavWrapper>
            // 1.10.0
        )
    }
}

const NavWrapper = styled.nav
`
background: var(--mainBlue);
.nav-link
{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: captialize;
}
`;