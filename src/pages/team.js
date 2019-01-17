import React from 'react'
import Layout from '../components/layout'
import John from '../images/John.jpg'
import Geoff from '../images/Geoff.jpg'
import Josh from '../images/Josh.jpg'
import Keith from '../images/Keith.jpg'
import Brad from '../images/Brad.jpg'
const TeamPage = () => (
    <Layout>
      

      <div class="row">
  <div class="column">
    <div class="card">
     <center> <img src={John} alt="" /></center>
      <div class="container">
       <center> <h2>John Sechrest</h2> </center>
        <p class="title">Secretary</p>
        <p>John Sechrest started as a software engineer at HP, writing network code for calculators. He is the founder of PEAK Internet services. He spent 5 years as the Economic Development Director of Corvallis Oregon, where he founded the Willamette Angel Conference. He participated in the Oregon Angel Fund. He is working to bring that model of community investing to Seattle with the Seattle Angel Conference. 

</p>
        
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
     <center> <img src={Josh} alt="" /></center>
      <div class="container">
       <center> <h2>Josh Maher</h2> </center>
        <p class="title">President</p>
        <p>Josh Maher is a passionate supporter of the Seattle startup community. He is the President of Seattle Angel, a non-profit focused on education at the intersection of startups and angel investing. Seattle Angel launched the highly successful Seattle Angel Conference and recently launched the Seattle Angel Fund. Josh, an angel investor himself, has been consulting, mentoring, and advising startups since 2007 and has recently been working to help individuals with strategies for including early stage investments in their overall portfolio. If you are a family office or need the services of a family office, Josh has some interesting projects in the works to help you. Josh is currently finishing a book on angel investing based on interviews of the best angels investing today, including Brad Feld, Christopher Mirabile, and Dan Rosen.
</p>
        
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
     <center> <img src={Keith} alt="" /></center>
      <div class="container">
       <center> <h2>Keith Laepple</h2> </center>
        <p class="title">Treasurer</p>
        <p>Keith Laepple is a technology focused angel, seeking investment and engagement opportunities with Pacific Northwest startups. A Seattle Angel Conference participant since 2012, he has participated in five SAC investor funds, and is the fund manager leading the for SAC VI investor group. Keith is also a member of the Seattle Alliance of Angels.

Formerly a 22-year manager in operating system products at Microsoft, Keith has led teams in program management, technical evagelism, and business development for PC, mobile, and consumer electronics platforms.
</p>
        
      </div>
    </div>
  </div>


  <div class="column">
    <div class="card">
     <center> <img src={Brad} alt="" /></center>
      <div class="container">
       <center> <h2>Brad Carpenter</h2> </center>
        <p class="title">Chairman</p>
        <p>Brad Carpenter, who currently serves as a CEO of Transparent IO, a start-up in the Software Defined Storage space, has been an active angel investor and mentor for tech entrepreneurs. Prior to supporting the local startup community, Brad served as CEO for Newline Software, after 20 years at Microsoft leading engineering teams for Windows, innovations and incubations for emerging geographies, PC hardware, and Microsoft Surface. Follow him @BradCarpenter
</p>
        
      </div>
    </div>
  </div>


  <div class="column">
    <div class="card">
     <center> <img src={Geoff} alt="" /></center>
      <div class="container">
       <center> <h2>Geoff Harris </h2> </center>
        <p class="title">Vice President</p>
        <p>Geoff Harris spent 15 years in executive leadership and engineering management positions at Microsoft Corporation. He developed new businesses and led teams in areas such as digital media, mobile and speech and natural language processing. Since retiring from Microsoft in late 2013, Geoff has turned his attention to developing a deeper angel investment community in Seattle through his involvement with the Alliance of Angels and the Seattle Angel Conference as well as advisory positions with several local start-ups. Geoff holds a bachelor’s degree from Brown University. He will be the fund manager for SAC VII</p>
        
      </div>
    </div>
  </div>

  </div>
    </Layout>
  )
  
  export default TeamPage
  