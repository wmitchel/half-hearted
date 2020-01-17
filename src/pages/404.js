import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import VideoEmbed from "../components/videoEmbed"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Banner />
    <VideoEmbed />
  </Layout>
)

export default NotFoundPage
