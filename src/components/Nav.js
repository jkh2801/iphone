import React from "react"
import './Nav.scss';

export default function Nav () {
    return (
        <div className="nav">
            <ul className="navigation">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#color">Color</a></li>
            </ul>
        </div>
    )
}