import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { IconButton } from '@mui/material';

const Header = () => {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className='header_icon'/>
            </IconButton>
            <img
                className='header_logo'
                src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
                alt=""
            />
            <IconButton>
                <QuestionAnswerIcon fontSize='large' className='header_icon' />
            </IconButton>
        </div>
    );
}
 
export default Header;