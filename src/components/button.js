// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import React from "react"
// import styled from "styled-components"
// import Theme from "./theme.js"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

// const Button = styled.button`
//   position: relative;
//   width: 100vw;
//   background: ${props => props.theme.colors.onyx};
//   opacity: 0.95;
// `

// const Button = ({children}) => {
//   const data = useStaticQuery(graphql`
//     query {
//         Button: file(relativePath: { eq: "Button.webp" }) {
//             childImageSharp {
//                 fluid(quality: 100) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//     }
//   `)

//   const imageStyle = {
//       objectPosition: `top center`
//   }

//   return (
//     <Theme>
//       <ButtonComponent>
//       </ButtonComponent>
//     </Theme>
//   )
// }

// export default Button
