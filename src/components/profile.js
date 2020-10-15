import React from "react"
import { getUser } from "../services/auth"

const Profile = () => (
  <>
    <h1>Your profile</h1>
    <ul>
      <li>Name: Sentralbygg 2 S6</li>
      <li>E-mail: maze@map.no</li>
    </ul>
  </>
)

export default Profile