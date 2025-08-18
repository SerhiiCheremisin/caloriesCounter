import styled from "styled-components";
import { appColors } from "./colors";

export const AboutList = styled.ul`
       display: flex;
       flex-direction: column;
       gap: 15px;
       li {
        display: flex;
        list-style: none;
        justify-content: space-between;
        min-width: 400px;
       }
`