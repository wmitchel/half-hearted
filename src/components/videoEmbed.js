import React from "react"
import styled from "styled-components"
import Theme from "./theme.js"
import { useStaticQuery, graphql } from "gatsby"

const VideoEmbedComponent = styled.div`
  display: flex;
  justify-content: center;
  background: ${props => props.theme.colors.onyx};
  padding: 5% 0;

  iframe {
    width: 100%;
    height: 100vh;
    max-height: 315px;
    max-width: 750px;
  }
`
const VideoEmbedComponentSecondOption = styled.div`
  display: flex;
  justify-content: center;
  background: #000;
  padding: 5% 0;

  iframe {
    width: 100%;
    height: 100vh;
    max-height: 315px;
    max-width: 750px;
  }
`
const VideoEmbedComponentThirdOption = styled.div`
  display: flex;
  justify-content: center;
  background: #373A4A;
  padding: 5% 0;

  iframe {
    width: 100%;
    height: 100vh;
    max-height: 315px;
    max-width: 750px;
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
          src="https://www.youtube-nocookie.com/embed/hC825Qtgyy0"
          frameborder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </VideoEmbedComponent>
      <VideoEmbedComponentSecondOption>
        <iframe
          src="https://www.youtube-nocookie.com/embed/hC825Qtgyy0"
          frameborder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </VideoEmbedComponentSecondOption>
      <VideoEmbedComponentThirdOption>
        <iframe
          src="https://www.youtube-nocookie.com/embed/hC825Qtgyy0"
          frameborder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </VideoEmbedComponentThirdOption>
    </Theme>
  )
}

export default VideoEmbed
