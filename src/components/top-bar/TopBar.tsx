import React from 'react';
import { ReactComponent as UploadIcon } from '../../images/upload.svg';
import { TopBarContainer } from './TopBar.styles';
import Button, { ButtonVariants } from '../buttons/Button';

const TopBar:React.FC = () => {
    return(
        <TopBarContainer>
            <Button variant={ButtonVariants.link} to=''>
                Upload
                <UploadIcon />
            </Button>
        </TopBarContainer>
    )
}

export default TopBar;