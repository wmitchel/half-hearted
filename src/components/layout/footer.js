import React, { useEffect } from "react"
import styled from "styled-components"
import Theme from "./theme.js"
import { useStaticQuery, graphql } from "gatsby"

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: #26272b;
  padding: 1.5rem 10%;
  font-size: 15px;
  line-height: 24px;
  color: #737373;

  &:after {
    content: "";
    width: 80%;
    height: 1px;
    background: #bbb;
    position: absolute;
    top: -1px;
    opacity: 0.5;
  }

  @media ${props => props.theme.breakpoints.tinyMobile} {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const FooterText = styled.div`
  a {
    color: #737373;
    text-decoration: none;
  }
  a:hover {
    color: #3366cc;
    text-decoration: none;
  }
  p {
    @media ${props => props.theme.breakpoints.tinyMobile} {
      text-align: center;
    }
  }
`

const SocialIcons = styled.ul`
  padding-left: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  @media ${props => props.theme.breakpoints.tinyMobile} {
    flex-wrap: wrap;
  }

  li {
    @media ${props => props.theme.breakpoints.tinyMobile} {
      display: flex;
      flex-basis: 33%;
      justify-content: center;
      margin-bottom: 01rem;
    }
  }
  a {
    background-color: #eceeef;
    color: #818a91;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin-right: 8px;
    border-radius: 100%;
    -webkit-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-left: 6px;
    margin-right: 0;
    border-radius: 100%;
    background-color: #33353d;
  }
  a:active,
  a:focus,
  a:hover {
    color: #fff;
    background-color: #29aafe;
  }
  .size-sm a {
    line-height: 34px;
    height: 34px;
    width: 34px;
    font-size: 14px;
  }
  a.facebook:hover {
    background-color: #3b5998;
  }
  a.twitter:hover {
    background-color: #00aced;
  }
  a.instagram:hover {
    background-color: #c13584;
  }
  a.apple:hover {
    background-color: #019cdc;
  }
  a.spotify:hover {
    background-color: #1db954;
  }
  a.youtube:hover {
    background-color: #ff0000;
  }
  a > span {
    display: none;
  }
`

const Footer = props => {
  const data = useStaticQuery(graphql`
    query {
      contentfulLayoutFooter {
        iconLinks {
          icon
          url
          buttonText
        }
        copyrightText
      }
    }
  `)

  useEffect(() => {
    const script = document.createElement("script")

    script.src = "https://kit.fontawesome.com/fa57e06175.js"
    script.async = true

    document.body.appendChild(script)
  }, [])

  const socialIcons = data.contentfulLayoutFooter.iconLinks.map(
    ({ icon, url, buttonText }) => {
      const myRegexp = /fa-(.*)/;
      const buttonType = myRegexp.exec(icon)[1];
      return (
        <li key={buttonType}>
          <a className={buttonType} href={url}>
            <i className={`fab ${icon}`}></i>
            <span>{buttonText}</span>
          </a>
        </li>
      )
    }
  )

  return (
    <Theme>
      <FooterContainer>
        <FooterText>
          <p className="copyright-text">
            {data.contentfulLayoutFooter.copyrightText}
          </p>
        </FooterText>
        <SocialIcons className="social-icons">{socialIcons}</SocialIcons>
      </FooterContainer>
    </Theme>
  )
}

export default Footer
