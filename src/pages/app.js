import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import DetteErEnLoginSide from "./detteErEnLoginSide"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <DetteErEnLoginSide path="/detteErEnLoginSide" component={DetteErEnLoginSide}/>
    </Router>
  </Layout>
)

export default App