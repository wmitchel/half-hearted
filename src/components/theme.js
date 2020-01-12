import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    powderWhite: "#FFFDF9",
    onyx: "#000000",
    // onyx: "#36313D",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  breakpoints: {
    tinyMobile: '(max-width: 500px)',
    mobile: '(max-width: 768px)',
    tablet: '(min-width: 768px)',
    tabletOnly: '(min-width: 768px) and (max-width: 1023px)',
    desktop: '(min-width: 1024px)',
    highDpi: '(min-width: 1408px)',
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
