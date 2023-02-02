import React from 'react';
import { Link } from 'react-router-dom';

const Videos:React.FC = () => {
    return(
        <ul>
            <li>
                <Link to='/video/1'>Video 1</Link>
            </li>
            <li>
                <Link to='/video/2'>Video 2</Link>
            </li>
            <li>
                <Link to='/video/3'>Video 3</Link>
            </li>
            <li>
                <Link to='/video/4'>Video 4</Link>
            </li>
            <li>
                <Link to='/video/5'>Video 5</Link>
            </li>
        </ul>
    )
}

export default Videos;