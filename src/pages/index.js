import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1>
        Velkommen til denne miniCasen!
      </h1>
      <p>
        Denne siden handler om en minicase som skal finne sted under code 2020.
        Se deg rundt og kanskje du finner noe som tar deg videre til neste steg.
      
      </p>
      <img src={require('../images/logo-3-mock.jpg')} alt=""></img>
      <div style={{color:"white"}}>
        <p>
          
          
          
          
          Admin hash: 9dee45a24efffc78483a02cfcfd83433
          
          
          
          
          </p>
      </div>
    </Layout>
  )
}
