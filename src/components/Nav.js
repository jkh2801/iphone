import React from "react"
import './Nav.scss';

export default function Nav (props) {
    const name = ["nav_white", "nav_red", "nav_green", "nav_blue", "nav_black"]
    console.log("nav")
    const nav_Classes = [
        "nav", name[props.num], window.scrollY > 0 ? "sticky": null
    ].filter(a => a).join(" ")
    const scroll = ((idx) => {
        console.log(idx)
        console.log("scroll")
        window.scrollTo({top:props.heights[idx], left:0, behavior:'smooth'})
        props.setPage(idx)
    }) 
    return (
        <div className={nav_Classes}>
            <ul className="navigation">
                <li><a href="#home" onClick={()=> scroll(0)}>Home</a></li>
                <li><a href="#about" onClick={()=> scroll(1)}>iPhone12</a></li>
                <li><a href="#pro" onClick={()=> scroll(2)}>Pro</a></li>
                <li><a href="#contact" onClick={()=> scroll(3)}>Contact</a></li>
            </ul>
        </div>
    )
}