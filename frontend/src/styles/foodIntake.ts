import styled, { keyframes } from "styled-components";
import { appColors } from "./colors";

export const HiddenFoodMenu = styled.div`
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       width: 350px;
       max-height: 300px;
       border-radius: 5%;
       overflow-x: hidden;
       overflow-y: scroll;
       &::-webkit-scrollbar {
         display: none;
       }
       scrollbar-width: none;
       -ms-overflow-style: none;
       background-color:rgb(181, 177, 177);
       position: absolute;
       z-index: 10;
       top:52%;
       left: 45%;
       ul{
        display: flex;
        flex-direction: column;
       li {
        list-style: none;
        cursor: pointer;
        &:hover {
          background-color:rgb(85, 81, 81);
        }
       }
       }  
`

export const NewDishMenu = styled.div`
       background-color: ${appColors.passive};
       width: 100%;
       height: 100%;
       z-index: 999;
       position: absolute;
       left: 0;
       top: 0;
`