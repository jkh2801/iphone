import React from "react"
import './About.scss';
import white from './image/iphone1.png'
import red from './image/iphone3.png'
import green from './image/iphone4.png'
import blue from './image/iphone5.png'
import black from './image/iphone2.png'

export default function About (props) {
    console.log("about")
    const name = ["about_white", "about_red", "about_green", "about_blue", "about_black"]
    const img = [white, red, green, blue, black]
    const imgArr = (n) => {
        const arr = []
        arr.push(img[(n+3)%5])
        arr.push(img[(n+1)%5])
        arr.push(img[n%5])
        arr.push(img[(n+2)%5])
        arr.push(img[(n+4)%5])
        return arr
    }
    const list = imgArr(props.num).map((i, idx) => 
        <div className = "imgBx" key={idx}>
            <img src={i} alt="#"></img>
        </div>
    )
    return (
        <section className={"about " + name[props.num]}>
            <div className="container">
                {list}
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
        </section>
    )
}