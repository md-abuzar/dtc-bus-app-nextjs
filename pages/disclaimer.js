import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';

export default function Terms() {
  
  return (
    <>
      <Head> 
        <title>Disclaimer - BusRoute.info</title>
        <meta name="description" content="Disclaimer for BusRoute.info" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='body'>
        <Navbar/>
          

        <div className="container dtc-bus-route-container mt-4 pt-3 pb-5 px-4">
        <h1 className="pt-5">Disclaimer</h1>
          <p>The information provided on BusRoute.info is for general informational purposes only.
            While we strive to provide accurate and up-to-date information, we make no representations
            or warranties of any kind, express or implied, about the completeness, accuracy, 
            reliability, suitability, or availability of the information contained on our website 
            or related graphics.</p>

          <h4 className='pt-3'><strong>Accuracy of Information</strong></h4>
          <p>The content on BusRoute.info is based on the author’s research, opinions, and personal
            experiences. It may not always reflect the most current news or developments. We do our
            best to ensure the accuracy of the information provided, but we cannot guarantee that 
            all information is entirely accurate, complete, or current. Any reliance you place on 
            the information provided on our website is strictly at your own risk.</p>
           
          <h4 className='pt-3'><b>Editorial Control</b></h4>
          <p>BusRoute.info is a news blog where our team of writers and editors curate and publish
            articles on various topics. The opinions expressed in the articles belong to the respective 
            authors and do not necessarily reflect the views of BusRoute.info. We strive to maintain
            editorial integrity and provide a platform for diverse perspectives.</p>
          
          <h4 className='pt-3'><b>External Links</b></h4>
          <p>BusRoute.info may contain links to external websites or resources. These links are provided
            for convenience and informational purposes. We have no control over the content, nature, 
            or availability of those external sites. The inclusion of any links does not necessarily 
            imply a recommendation or endorsement of the views expressed within them.</p>

          <h4 className='pt-3'><b>Advertisement and Sponsored Content</b></h4>
          <p>BusRoute.info may display advertisements or sponsored content. The presence of such content
             does not constitute an endorsement or recommendation by Taazatime.com. We are not 
             responsible for the accuracy, legality, or content of any external advertisements 
             or sponsored materials.</p>
  

          <h4 className='pt-3'><b>Always Seek Professional Advice</b></h4>
          <p>The information provided on BusRoute.info is not intended to be a substitute for 
            professional advice. It is essential to seek the advice of qualified professionals 
            regarding any specific issue or concern. Reliance on any information provided on this 
            website is solely at your own risk.</p>

          <h4 className='pt-3'><b>Limitation of Liability</b></h4>
          <p>In no event shall BusRoute.info or its owners, employees, or affiliates be liable for any 
            direct, indirect, incidental, consequential, or special damages arising out of or in 
            connection with the use of our website, the information provided, or the inability to use 
            the website.</p>

          <h4 className='pt-3'><b>Changes to the Disclaimer</b></h4>
          <p>We reserve the right to modify or update this Disclaimer at any time without prior notice. 
            By using BusRoute.info, you agree to be bound by the current version of the Disclaimer.</p>

          <h5 className='pt-3'><b>Contact Us</b></h5>
          <p>If you have any questions or concerns regarding this Disclaimer or our website, 
            please contact us at:</p>

          <p><b>Email:</b>info@busroute.info</p>         
          
        </div>
        <Footer/>
      </div>
    </>
  )
}
