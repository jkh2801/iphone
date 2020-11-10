import React, { useState } from 'react'
import './Pro.scss'
import blue from './image/bluePro.png'
import gold from './image/goldPro.png'
import silver from './image/silverPro.png'
import graphite from './image/graphitePro.png'

export default function Pro() {
    const img = [blue, gold, silver, graphite]
    const name = ["퍼시픽 블루", "골드", "실버", "그래파이트"]
    const pro_bg = ["pro_blue", "pro_gold", "pro_silver", "pro_graphite"]
    const [num, setNum] = useState(0)
    console.log("pro")

    return (
        <section className={"pro " + pro_bg[num]}>
            <div className="content">
                <h1>Pro에서 정교한 사진촬영을 접해보세요.</h1>
                <div className="bg">
                    <ul>
                        <li onClick={() => setNum(0)}></li>
                        <li onClick={() => setNum(1)}></li>
                        <li onClick={() => setNum(2)}></li>
                        <li onClick={() => setNum(3)}></li>
                    </ul>
                    <h4>{name[num]}</h4>
                </div>
            </div>
            <div className="imgBx">
                <img src = {img[num]} alt="#"></img>
            </div>
        </section>
    )
}