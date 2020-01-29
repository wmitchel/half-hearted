import React from "react"
import styled from "styled-components"
import Theme from "./theme.js"
import { useStaticQuery, graphql } from "gatsby"

const VideoEmbedComponent = styled.div`
  display: flex;
  justify-content: center;
  background: #26272b;
  // background: #373A4A;
  padding: 5% 0;

  iframe {
    width: 50%;
    height: 50vh;

    @media ${props => props.theme.breakpoints.mobile} {
      width: 100%;
    }

    @media ${props => props.theme.breakpoints.tablet} {
      width: 75%;
    }

    @media ${props => props.theme.breakpoints.desktop} {
      width: 50%;
    }
  }
`

const VideoEmbed = props => {
  const data = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "banner.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          banner {
            links {
              label
              url
            }
            headingText
            subheadingText
          }
        }
      }
    }
  `)

  return (
    <Theme>
      <VideoEmbedComponent>
        <iframe
          src="https://www.youtube-nocookie.com/embed/FbjHb1-Msgc"
          frameborder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoEmbedComponent>
    </Theme>
  )
}

export default VideoEmbed
