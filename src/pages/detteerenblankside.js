import React from "react"
import Layout from "../components/layout"

export default function Test() {
    return(
        <Layout>
            <h1>Dette er en blank side?</h1>
            <p style={{ color:"white" }} >
                Passordet for inlogging er summen av disse:
                9e925e9341b490bfd3b4c4ca3b0c1ef2
                +
                5f4dcc3b5aa765d61d8327deb882cf99
                +
                a2a551a6458a8de22446cc76d639a9e9
                +
                cc460b0e0035f80845afb15f8b50dc55
                +
                2f43b42fd833d1e77420a8dae7419000
            </p>
            <p style={{color:"white"}}>
                Du kommer deg kanskje til siste steget hvis du tar en titt på /spam siden:o
            </p>
        </Layout>
    )
}