import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export enum ButtonVariants {
    button = 'button',
    link = 'link'
}

const ButtonContainer = styled(Link)`
    background-color:var(--color-accent);
    color:var(--color-text);
    text-decoration:none;
    padding: .5rem 1rem;
    border-radius:10px;
    font-weight:500;
    font-size:var(--fs-medium);
    display:flex;
    align-items:center;
    justify-content:center;
    gap:.4rem;
    max-width:max-content;
    svg{
        width:1.6rem;
        height:auto;
        display:block;
    }
`;

type Link = {
    children: React.ReactNode;
    variant: ButtonVariants.link;
    to: string;
}

type Button = {
    children: React.ReactNode;
    variant: ButtonVariants.button;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

type ButtonProps = Link | Button;

const Button:React.FC<ButtonProps> = (props) => {

    const { children, variant } = props;

    if(variant === ButtonVariants.link){
        return(
            <ButtonContainer {...props}>
                {children}
            </ButtonContainer>
        )
    }
    return(
        <ButtonContainer {...props} as='button'>
            {children}
        </ButtonContainer>
    )

}

export default Button;