/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMusic } from "@fortawesome/free-solid-svg-icons"
import Link from "./Link"

import styled from "styled-components"

const FlexContainer = styled.div`
  display: flex;
  &.center {
    align-items: center;
    justify-content: center;
  }
`

const MusicLink = styled.a`
  cursor: pointer;
  color: color-text-dark;
`

const MusicContainer = styled(MusicLink)`
  font-size: xx-large;
  margin: 5px;
  border-bottom: 0px;
`

const Bio = ({ subject }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
            email
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  console.log(author)

  return (
    <>
      <p className="courgette">
        <strong>Enjoyed your read?</strong>
        <br />I would love reading your thoughts by mail at{" "}
        <Link
          href={`mailto:someone@yoursite.com?subject=${subject}`}
          className="it"
        >
          {author.email}
        </Link>
        {"!"}
        <br />
        Or you can follow me on my Instagram account{" "}
        <Link href={``} className="it">
          @illanor-music
        </Link>
      </p>
    </>
  )
}

export default Bio
