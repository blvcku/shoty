import React from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as UploadIcon } from '../../images/upload.svg';
import { TopBarContainer } from './TopBar.styles';
import Button, { ButtonVariants } from '../buttons/Button';

const TopBar:React.FC = () => {

    const location = useLocation();

    return(
        <TopBarContainer>
            <Button variant={ButtonVariants.link} to='/m/upload' state={{ background: location }}>
                Upload
                <UploadIcon />
            </Button>
        </TopBarContainer>
    )
}

export default TopBar;