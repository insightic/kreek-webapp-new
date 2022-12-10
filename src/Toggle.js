import React, { useEffect, useState } from 'react';
import './Toggle.css';
import { setTheme } from './Theme.js';
import * as Icon from 'react-bootstrap-icons';
import { BrightnessHighFill as SunIcon, MoonStarsFill as MoonIcon} from 'react-bootstrap-icons';

function Toggle(props) {
    // const [togClass, setTogClass] = useState('light');
    let theme = localStorage.getItem('theme');

    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            props.setTogClass('light')
        } else {
            setTheme('theme-dark');
            props.setTogClass('dark')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            props.setTogClass('dark')
        } else if (localStorage.getItem('theme') === 'theme-light') {
            props.setTogClass('light')
        }

    }, [theme])

    return (
        <div className="toggle-container">
            <button className="toggle-button" onClick={handleOnClick} >
                <SunIcon className="sunIcon" style = {{transform: theme =="theme-dark" ? "translateY(100px)" : "translateY(0px)"}}/>
                <MoonIcon className="moonIcon" style = {{transform: theme =="theme-light" ? "translateY(-100px)" : "translateY(0px)"}}/>
            </button>
        </div>
    )
}


export default Toggle