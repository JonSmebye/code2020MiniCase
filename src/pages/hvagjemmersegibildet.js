import React from "react"
import Layout from "../components/layout"
import StegoBilde from "../images/START.png"
import Stego2 from "../images/download.png"

export default function Stego() {
    return (
        <Layout>
            <h1>Stegonografi</h1>
            <img src={Stego2}></img>
            <p>Stegonografi er kunsten å skjule informasjon rett foran øynene til andre. Det er flere måter å gjøre dette på, en kan skjule en fil, melding, bilde eller video i en annen fil, melding, bilde eller video. Ordet Stegonografi stammer fra det greste ordet steganographia, som er sammensatt av de to ordene steganósm, som bedtyr "skjult", og grapgia som betyr "skriving"</p>
        </Layout>
    )
}