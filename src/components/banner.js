import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Theme from "./abstract/theme.js"

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
  white-space: nowrap;

  &:hover {
    background: rgb(54, 49, 61, 1);
  }

  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
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
      contentfulLayout {
        contentModules {
          ... on ContentfulLayoutHeroImage {
            heading
            subHeading
            buttonLinks {
              buttonText
              url
              secondaryButton
            }
            backgroundImage {
              fluid(maxWidth: 2000) {
                aspectRatio
                src
                sizes
                srcSet
              }
            }
          }
        }
      }
    }
  `)

  const imageStyle = {
    objectPosition: `top center`,
  }

  const bannerButtons = data.contentfulLayout.contentModules[0].buttonLinks.map(
    ({ buttonText, url, secondaryButton }) => {
      if (secondaryButton) {
        return (
          <MerchBannerLinkHref key={buttonText} href={url}>
            {buttonText}
          </MerchBannerLinkHref>
        )
      }
      return (
        <BannerLinkHref key={buttonText} href={url}>
          {buttonText}
        </BannerLinkHref>
      )
    }
  )

  return (
    <Theme>
      <BannerComponent>
        <BannerImage
          imgStyle={imageStyle}
          fluid={data.contentfulLayout.contentModules[0].backgroundImage.fluid}
        />
        <BannerContent>
          <BannerHeadingText>
            {data.contentfulLayout.contentModules[0].heading}
          </BannerHeadingText>
          <BannerContentHeading>
            {data.contentfulLayout.contentModules[0].subHeading}
          </BannerContentHeading>
          {bannerButtons}
        </BannerContent>
      </BannerComponent>
    </Theme>
  )
}

export default Banner
