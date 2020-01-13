import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Theme from "./theme.js"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BannerComponent = styled.div`
  position: relative;
  width: 100%;
  background: ${props => props.theme.colors.onyx};
  opacity: 1;
`

const BannerImage = styled(Img)`
  height: 100vh;
`

const BannerContent = styled.div`
  position: absolute;
  bottom: 25%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media ${props => props.theme.breakpoints.mobile} {
    flex-direction: column;
  }
`

const BannerHeadingText = styled.h1`
  position: absolute;
  bottom: 50%;
  
  width: 100%;
  text-align: center;

  color: ${props => props.theme.colors.powderWhite};
`

const BannerContentHeading = styled.h4`
  flex-basis: 100%;
  text-align: center;

  color: ${props => props.theme.colors.powderWhite};
`

const BannerLink = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0.5rem 1rem;
  margin: 0 1rem;
  width: 9rem;

  border: 2px solid ${props => props.theme.colors.powderWhite};
  border-radius: 6px;

  color: ${props => props.theme.colors.powderWhite};
  background: rgb(54,49,61,0.5);
  transition: background-color 0.5s ease;

  &:hover {
    background: rgb(54,49,61,1);
  }

  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
`

const Banner = () => {
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
  `)


  const imageStyle = {
      objectPosition: `top center`
  }

  const bannerButtons = data.site.banner.links.map(({label, url}) => {
    return (
      <BannerLink to={url}>
        {label}
      </BannerLink>
    )
  });


  return (
    <Theme>
      <BannerComponent>
        <BannerImage imgStyle={imageStyle} fluid={data.banner.childImageSharp.fluid} />
        <BannerHeadingText>
          {data.site.banner.headingText}
        </BannerHeadingText>
        <BannerContent>
          <BannerContentHeading>
            {data.site.banner.subheadingText}
          </BannerContentHeading>
          {bannerButtons}
        </BannerContent>
      </BannerComponent>
    </Theme>
  )
}

export default Banner
