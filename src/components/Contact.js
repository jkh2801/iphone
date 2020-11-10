import React from 'react'
import './Contact.scss'
import box from './image/box.png'
import apple from './image/apple.png'

export default function Contact() {
    console.log("contact")
    const openPage = (idx) => {
        const location = ["https://shop.tworld.co.kr/exhibition/view?exhibitionId=P00000157&utm_medium=cpc&utm_source=google&utm_campaign=iPhone12_2_teasing_PC&utm_term=A179&gclid=EAIaIQobChMIvNvQs6717AIVxK6WCh1phwBvEAAYASAAEgIXS_D_BwE",
         "https://shop.kt.com:444/display/olhsPlan.do?plnDispNo=1510",
         "https://shop.uplus.co.kr/pc/event/eventView?ushpPmtnNo=6695&eventOrder=lately&ushpBzdpCd=01&pageNo=&fromId=pgrs&ushpPmtnDivsCd=03&gclid=EAIaIQobChMI5N_H36717AIVhrmWCh27tgMXEAAYAiAAEgKkk_D_BwE"]
        window.open(location[idx])
    }
    return (
        <section className="contact">
            <div className="content">
                <div className="imgBx">
                    <img src={box} alt="#"></img>
                </div>
            </div>
            <div className="content">
                <div className="logo">
                    <img src={apple} alt="#"></img>
                </div>
                <div className="url" onClick={() => openPage(0)}>
                    SKT 바로가기
                </div>
                <div className="url" onClick={() => openPage(1)}>
                    KT 바로가기
                </div>
                <div className="url" onClick={() => openPage(2)}>
                    LG 바로가기
                </div>
            </div>
        </section>
    )
}