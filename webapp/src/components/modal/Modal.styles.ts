import styled from "styled-components";

export const ModalContainer = styled.div`
    width:100%;
    min-height:100vh;
    position:fixed;
    left:0;
    top:0;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:var(--color-bg-modal);
    padding:1rem;
    z-index:var(--z-index-modal);
`;