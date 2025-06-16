import styled from "styled-components";
import { appColors } from "./colors";

export const ViewScreen = styled.div`
display: flex;
width: 100%;
height: 100%;
` 

export const NavigationMenu = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
height: 98dvh;
padding-left: 1%;
background-color: ${appColors.main};
`
export const MainScreen = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 98dvh;
flex: 1;
background-color: ${appColors.second};
`
