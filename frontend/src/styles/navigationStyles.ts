import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { appColors } from "./colors";

interface IAngle {
  angle: number
}

export const LinkList = styled.ul`
       display: flex;
       flex-direction: column;
       
       li {
        list-style: none;
        cursor: pointer;
       }
`
export const LinkListLi = styled.li<IAngle>`
       display: flex;
       transform: rotate(${props => props.angle}deg);
`

export const StyledNavLink = styled(NavLink)`
       text-decoration: none;
       color: ${appColors.passive};
       padding: 15px 0px;
     
       &.active {
         color: ${appColors.active};
         font-weight: bold;
       }
`

export const DropdownMenu = styled.ul`
       opacity: 0;
       visibility: hidden;
       position: absolute;
       left: 0%;
       top: -400%;
       transition: 1s ease;
       padding: 0;
`
export const HiddenNav = styled.div`
       display: flex;
       position: absolute;
       width: 40px;
       height: 40px;
       border-radius: 50%;
       background-color: ${appColors.passive};
       cursor: pointer;
       top: 50%;
       left: 1%;
       transition: 1s ease;

       &:hover {
        background-color: ${appColors.active};
       }

       &:hover ${DropdownMenu} {
        opacity: 1;
        visibility: visible;
        left: 100%;
       }
`

