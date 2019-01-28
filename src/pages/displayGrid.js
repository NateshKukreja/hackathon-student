import React from 'react'
import Footer from '../components/footer/footer'
import Layout from '../components/layout/layout'
import Links from '../components/links/links'
import Content from '../components/content/Content'

const displayGrid = () => (
  <Layout>
    <Content stepNumber="1"/>
    <Links />
    <Footer />
  </Layout>
)

export default displayGrid
