import React from "react"
import Layout from "../components/layout"
import StegoBilde from "../images/START.png"

export default function Stego() {
    return (
        <Layout>
            <h1>Stegonografi</h1>
            <img src={StegoBilde} alt=""></img>
            <p>Stegonografi er kunsten å kjule informasjon i rett foran øynene til andre. Det er flere måter å gjøre dette på, en kan kjule en fil, melding, bilde eller video i en annen fil, melding, bilde eller video. Ordet Stegonografi kommer av det greste ordet steganographia, som er sammensatt av de to ordene steganósm, som bedtyr "skjult", og grapgia som betyr "skriving"</p>
        </Layout>
    )
}