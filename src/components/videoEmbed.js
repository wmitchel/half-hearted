import React from "react"
import styled from "styled-components"
import Theme from "./theme.js"
import { useStaticQuery, graphql } from "gatsby"

const VideoEmbedComponent = styled.div`
  display: flex;
  justify-content: center;
  background: #26272b;
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
      contentfulLayout {
        contentModules {
          ... on ContentfulLayoutVideoEmbed {
            activeVideoEmbed {
              videoId
            }
          }
        }
      }
    }
  `)

  const { videoId } = data.contentfulLayout.contentModules[1].activeVideoEmbed;

  return (
    <Theme>
      <VideoEmbedComponent>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoEmbedComponent>
    </Theme>
  )
}

export default VideoEmbed
