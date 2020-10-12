import React from "react"
import { css } from "@emotion/core"
import { Link, navigate } from "gatsby"
import NavBar from "./nav-bar"
import { getUser, isLoggedIn, logout } from "../services/auth"
import './meny.css'
import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link className="Meny"
        to={`/tips/`}
      >
        Tips
      </Link>
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          Minicase
        </h3>
      </Link>
      <Link
        to={`/cesar/`}
        className="Meny"
      >
        Cesar
      </Link>
      <Link
        to={`/`}
        className="Meny"
      >
        Forside
      </Link>
      {isLoggedIn() ? (
          <Link
            to="/"
            className="Meny"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/detteErEnLoginSide`))
            }}
          >
            Logout
          </Link>
        ) : null}
      {children}
    </div>
  )
}