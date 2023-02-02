import React from 'react';
import { Outlet } from 'react-router-dom';
import ModalPortal from './ModalPortal';
import { ModalContainer } from './Modal.styles';

const Modal:React.FC = () => {
    return(
        <ModalPortal>
            <ModalContainer>
                <Outlet />
            </ModalContainer>
        </ModalPortal>
    )
}

export default Modal;