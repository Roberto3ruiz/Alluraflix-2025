import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
     * {
        box-sizing: border-box;
        font-family: "Roboto",sans-serif;
        margin: 0;
        padding: 0;
        text-decoration: none;
        transition: all .5s ease;
    }
    body{
        background-color:rgb(0, 0, 0);
    }
    a{
        text-decoration: none;
        color: white;
    }



`;

export default GlobalStyle;
