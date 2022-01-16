import React from 'react';
import { useHistory } from 'react-router-dom';
import './welcome.css'


export default function Welcome() {
    const history = useHistory();

    const goto=(url)=>{
        history.push(url)
    }
    
    return (
        <div className='welcomeScreen-container'>
            <div className='welcomeScreen'>
                <h1>Hello Jamy</h1>
                <h2>Here you can find codes for the following Components</h2>
                <h4>
                    <ul>
                        <li onClick={()=>{goto('/nav')}}>Responsive NavBar</li>
                        <li onClick={()=>{goto('/search')}}>Search box</li>
                        <li onClick={()=>{goto('/search')}}>Responsive NavBar</li>
                    </ul>
                </h4>
            </div>
        </div>
        
    )
}
