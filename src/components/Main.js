import React, {useState} from "react"
import './Main.scss';
import white from './image/white.png'
import red from './image/red.png'
import green from './image/green.png'
import blue from './image/blue.png'
import black from './image/black.png'

export default function Main (props) {
    const img = [white, red, green, blue, black]
    const name = ["main_white", "main_red", "main_green", "main_blue", "main_black"]

    return (
        <section className={"main " + name[props.num]}>
            <div className="content">
                <h1>iPhone 12</h1>
                <div className="bg">
                    <ul>
                        <li onClick={() => props.setNum(0)}></li>
                        <li onClick={() => props.setNum(1)}></li>
                        <li onClick={() => props.setNum(2)}></li>
                        <li onClick={() => props.setNum(3)}></li>
                        <li onClick={() => props.setNum(4)}></li>
                    </ul>
                </div>
            </div>
            <div className="imgBx">
                <img src = {img[props.num]} alt="#"></img>
            </div>
        </section>
    )
}