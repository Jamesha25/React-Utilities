import React, {useState, useEffect} from 'react'
import './navBar.css'
export default function NavBar(props) {
    const [click, setClick] = useState(false);
    const navLinks = document.querySelectorAll('nav ul li');

    useEffect(()=>{
        navLinks.forEach((item,index)=>{
            if(item.style.animation){
                item.style.animation=''
            }
            else{
                item.style.animation=`navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        })
    }, [click])
    
    return (
        <div>
            <nav>
                <div className='logo'>
                    <h4>{props.logo}</h4>
                </div>
                <ul className={click?'nav-links nav-active':'nav-links'}>
                    <li><a href='#'>{props.option1}</a></li>
                    <li><a href='#'>{props.option2}</a></li>
                    <li><a href='#'>{props.option3}</a></li>
                    <li><a href='#'>{props.option4}</a></li>
                    <li><a href='#'>{props.option5}</a></li>
                </ul>
                <div className='burger' onClick={()=>setClick(!click)}>
                    <div className={click?'line1':null}></div>
                    <div className={click?'line2':null}></div>
                    <div className={click?'line3':null}></div>
                </div>
            </nav>
        </div>
    )
}
