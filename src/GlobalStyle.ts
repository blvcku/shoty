import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --color-main: #0e0e10;
        --color-secondary: #18181b;
        --color-accent: #21D43C;
        --color-text: #efeff1;

        --fs-small:1rem;
        --fs-medium:1.4rem;
        --fs-big:clamp(1.5rem, 5vw, 2rem);
        --fs-large:clamp(1.8rem, 6vw, 2.4rem);
        --fs-xlarge:clamp(2.2rem, 7vw, 3rem);
        --fs-xxlarge:clamp(2.5rem, 9vw, 4rem);

        font-family: 'Red Hat Display', sans-serif;
        font-size:100%;
        color:var(--color-text);
    }

    *, *::before, *::after{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-size:100%;
    }

    body{
        background:var(--color-main);
    }

    h1,h2,h3,h4,h5,h6{
        font-weight:700;
    }

    ul, ol{
        list-style:none;
    }

    button{
        cursor:pointer;
    }
`;

export default GlobalStyle;