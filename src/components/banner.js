import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Theme from "./theme.js"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BannerComponent = styled.div`
  position: relative;
  width: 100vw;
  background: ${props => props.theme.colors.onyx};
  opacity: 0.95;
`

const BannerImage = styled(Img)`
  height: 100vh;
`

const Banner = ({children}) => {
  const data = useStaticQuery(graphql`
    query {
        banner: file(relativePath: { eq: "banner.jpg" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
  `)

  const imageStyle = {
      objectPosition: `top center`
  }

  return (
    <Theme>
      <BannerComponent>
        <BannerImage imgStyle={imageStyle} fluid={data.banner.childImageSharp.fluid} />
        {children}
      </BannerComponent>
    </Theme>
  )
}

export default Banner
