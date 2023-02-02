import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --color-main: #e8e8e8;
        --color-secondary: #efeff1;
        --color-text: #18181b;
        --color-shadow: rgba(0,0,0,.1);
        --color-accent: #6688FF;
        --color-bg-modal: rgba(0,0,0,.5);

        --shadow-1:0 1px 2px var(--color-shadow),0 0px 2px var(--color-shadow);
        --shadow-2:0 0 2px 0 var(--color-shadow);

        --fs-small:.7rem;
        --fs-medium:1rem;
        --fs-big:clamp(1.5rem, 5vw, 2rem);
        --fs-large:clamp(1.8rem, 6vw, 2.4rem);
        --fs-xlarge:clamp(2.2rem, 7vw, 3rem);
        --fs-xxlarge:clamp(2.5rem, 9vw, 4rem);

        --z-index-modal:1000;

        font-family: 'Red Hat Display', sans-serif;
        font-size:100%;
        color:var(--color-text);
        @media (prefers-color-scheme: dark){
            --color-main: #0e0e10;
            --color-secondary: #18181b;
            --color-text: #efeff1;
            --color-shadow: rgba(0,0,0,.9);
        }
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

    a{
        color:var(--color-text);
    }

    button{
        cursor:pointer;
    }
`;

export default GlobalStyle;