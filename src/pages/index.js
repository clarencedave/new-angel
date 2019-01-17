import React from 'react'


import Layout from '../components/layout'

import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <br/>
    <br/>
    <br/>

    
    <h1 class = "seattle" >Seattle Angel</h1>
   <p class = "seattle">A non-profit corporation. Sparking the flame of angel investing in the Northwest</p>
    
  </Layout>
)

export default IndexPage
