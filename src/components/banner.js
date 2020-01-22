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

  &:before {
    z-index: 1;
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(rgb(54, 49, 61, 0.125), rgb(54, 49, 61, 0.125));
  }
`

const BannerImage = styled(Img)`
  height: 100vh;
`

const BannerContent = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  z-index: 2;

  @media ${props => props.theme.breakpoints.tinyMobile} {
    flex-direction: column;
    top: inherit;
    bottom: 20%;
  }
`

const BannerHeadingText = styled.h1`
  width: 100%;
  margin-top: 0;
  text-align: center;
  font-size: 3.5em;

  color: ${props => props.theme.colors.powderWhite};
`

const BannerContentHeading = styled.h2`
  flex-basis: 100%;
  margin-top: 0;
  text-align: center;
  font-size: 2rem;

  color: ${props => props.theme.colors.powderWhite};
`

const BannerLink = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: nowrap;

  padding: 0.5rem 1rem;
  margin: 0.5rem 1rem;
  width: 9rem;

  border: 2px solid ${props => props.theme.colors.powderWhite};
  border-radius: 6px;

  color: ${props => props.theme.colors.powderWhite};
  background: rgb(54, 49, 61, 0.5);
  transition: background-color 0.5s ease;

  &:hover {
    background: rgb(54, 49, 61, 1);
  }

  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
`

const BannerLinkHref = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0.5rem 1rem;
  margin: 0.5rem 1rem;
  width: 9rem;

  border: 2px solid ${props => props.theme.colors.powderWhite};
  border-radius: 6px;

  color: ${props => props.theme.colors.powderWhite};
  background: rgb(54, 49, 61, 0.5);
  transition: background-color 0.5s ease;

  &:hover {
    background: rgb(54, 49, 61, 1);
  }

  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
`

const MerchBannerLink = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0.5rem 1rem;
  margin: 0.5rem 1rem;
  width: 9rem;

  border: 2px solid ${props => props.theme.colors.powderWhite};
  border-radius: 6px;

  color: ${props => props.theme.colors.powderWhite};
  background: rgb(224, 193, 232, 0.5);
  transition: background-color 0.5s ease;
  transition: color 0.35s ease;

  &:hover {
    color: ${props => props.theme.colors.onyx};
    background: rgb(224, 193, 232, 1);
  }

  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;

  order: 3;

  @media ${props => props.theme.breakpoints.tablet} {
    order: 2;
  }
`

const MerchBannerLinkHref = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0.5rem 1rem;
  margin: 0.5rem 1rem;
  width: 9rem;

  border: 2px solid ${props => props.theme.colors.powderWhite};
  border-radius: 6px;

  color: ${props => props.theme.colors.powderWhite};
  background: rgb(224, 193, 232, 0.5);
  transition: background-color 0.5s ease;
  transition: color 0.35s ease;

  &:hover {
    color: ${props => props.theme.colors.onyx};
    background: rgb(224, 193, 232, 1);
  }

  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;

  order: 3;

  @media ${props => props.theme.breakpoints.tablet} {
    order: 2;
  }
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

  const imageStyle = {
    objectPosition: `top center`,
  }

  let order = 0
  const bannerButtons = data.site.siteMetadata.banner.links.map(
    ({ label, url }) => {
      return <BannerLinkHref href={url}>{label}</BannerLinkHref>
    }
  )

  return (
    <Theme>
      <BannerComponent>
        <BannerImage
          imgStyle={imageStyle}
          fluid={data.banner.childImageSharp.fluid}
        />
        <BannerContent>
          <BannerHeadingText>
            {data.site.siteMetadata.banner.headingText}
          </BannerHeadingText>
          <BannerContentHeading>
            {data.site.siteMetadata.banner.subheadingText}
          </BannerContentHeading>
          {bannerButtons}
          <MerchBannerLinkHref href="https://halfheartedband.bigcartel.com/">
            Merch
          </MerchBannerLinkHref>
        </BannerContent>
      </BannerComponent>
    </Theme>
  )
}

export default Banner
