import styled from "styled-components";
import { appColors } from "./colors";

export const AppForm = styled.form`
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       gap: 15px;
       width: 600px;
       height: 300px;
       padding: 15px;
       background: radial-gradient( ellipse at top right , ${appColors.second} , ${appColors.passive} , ${appColors.main} ) ;
       border-radius: 15px;

       input {
        width: 60%;
        padding: 5px;
       }
`

export const AppButton = styled.button`
       display: flex;
       min-width: 100px;
       min-height: 30px;
       justify-content: center;
       align-items: center;
       cursor: pointer;
       background-color: ${appColors.passive};
       transition: all.5s ease;
       border: none;
       outline: none;
       border-radius: 5px;
       
       &:hover {
        background-color: ${appColors.active};
       }
`
