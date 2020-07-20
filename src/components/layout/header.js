import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Theme from "../abstract/theme.js"

const HeaderComponent = styled.header`
  position: fixed;
  height: 60px;
  width: 100vw;
  top: 0;
  background: ${props => props.theme.colors.onyx};
  opacity: 0.95;
`

const NavigationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.powderWhite};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
`

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      headerIcon: file(relativePath: { eq: "WhiteSymbol.jpeg" }) {
        childImageSharp {
          fixed(height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Theme>
      <HeaderComponent>
        <NavigationContainer>
          <StyledLink to="/">
            <Img
              className="style-me"
              fixed={data.headerIcon.childImageSharp.fixed}
            />
            <span>{siteTitle}</span>
          </StyledLink>
        </NavigationContainer>
      </HeaderComponent>
    </Theme>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
