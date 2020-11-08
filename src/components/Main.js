import React, {useRef} from "react"
import './Main.scss';
import white from './image/white.png'

export default function Main () {
    return (
        <section className="main" ref={useRef("home")}>
            <div className="content">
                <h1>iPhone 12</h1>
            </div>
            <div className="imgBx">
                <img src = {white} alt="#"></img>
            </div>
        </section>
    )
}