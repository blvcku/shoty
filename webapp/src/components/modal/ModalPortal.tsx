import React from 'react';
import ReactDom from "react-dom";

type ModalPortalProps = {
    children: React.ReactNode
}

const ModalPortal:React.FC<ModalPortalProps> = ({children}) => (
    ReactDom.createPortal(
        <>
            {children}
        </>,
        document.getElementById('modal') as Element
    )
)

export default ModalPortal;