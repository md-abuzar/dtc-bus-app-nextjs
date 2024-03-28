import Head from 'next/head'
import Navbar from '@/components/Navbar'
import SearchBar from '@/components/SearchBar';
import Footer from '@/components/Footer';


export default function PrivacyPolicy() {
  
  return (
    <>
      <Head>
        <title>Privacy Policy - BusRoute.info</title>
        <meta name="description" content="Privacy Policy for BusRoute.info" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='body'>
        <Navbar/>

        <div className="container dtc-bus-route-container mt-4 pt-3 pb-5 px-4">
          <h1 className='py-3 text-center'>Privacy Policy</h1>
          <p>This Privacy Policy outlines how BusRoute.info	 collects, uses, and protects the 
            personal information you provide while using our website. We are committed to 
            ensuring the privacy and security of your personal information. By using BusRoute.info	, 
            you agree to the terms and practices described in this policy.
          </p>

          <h5 className='pt-3'><strong>Information We Collect</strong></h5>
          <p>When you visit Resturantsmenu.com, we may collect certain personally identifiable 
            information, including but not limited to:</p>
          <ul>
          <li><b>Name: </b>We may collect your name when you voluntarily provide it, such as when
           submitting comments or contacting us through our website.</li>
          <li><b>Email Address:</b>We may collect your email address when you subscribe to our newsletter
           or contact us through our website.</li>
          <li><b>IP Address: </b>We automatically collect your IP address and related information, such
           as your approximate location, for analytical and security purposes.</li>
          <li><b>Cookies: </b>We use cookies to enhance your browsing experience and track usage 
          information. You can control and manage cookies through your browser settings.</li>
          </ul>
           
          <h5 className='pt-3'><b>Use of Information</b></h5>
          <p>The information we collect is used for the following purposes:</p>
          <ul>
            <li>To provide and personalize our services to you.</li>
            <li>To communicate with you, respond to your inquiries, and provide customer support.</li>
            <li>To send you newsletters, updates, and promotional materials if you have subscribed to our mailing list.</li>
            <li>To analyze website usage and improve our content and services.</li>
            <li>To prevent fraud, protect the security of our website, and comply with legal obligations.</li>
          </ul>

          <h5 className='pt-3'><b>Data Sharing and Disclosure</b></h5>
          <p>We do not sell, trade, or transfer your personally identifiable information to third 
          parties without your consent, except in the following cases:</p>

          <p><strong>Service Providers:</strong> We may engage trusted third-party service providers 
          to assist us in operating our website and providing services to you. These providers have 
          access to your personal information only to perform specific tasks on our behalf and are
          obligated to maintain its confidentiality.</p>
          <p><strong>Legal Requirements:</strong> We may disclose your personal information if required 
          by law or in response to valid legal processes, such as a court order or government request.</p>
          <p><strong>Consent:</strong> We may share your information with your consent or as otherwise
           disclosed at the time of collection.</p>
           
           <h5 className='pt-3'><b>Data Retention</b></h5>
           <p>We retain your personal information for as long as necessary to fulfill the purposes
            outlined in this Privacy Policy, unless a longer retention period is required or
            permitted by law.</p>

            <h5 className='pt-3'><b>Security</b></h5>
            <p>We take reasonable measures to protect the security of your personal information 
              and prevent unauthorized access, disclosure, or alteration. However, please note that
              no method of transmission over the internet or electronic storage is 100% secure, and we
              cannot guarantee absolute security.</p>

            <h5 className='pt-3'><b>Your Rights</b></h5>
            <p>You have the right to access, update, correct, and delete your personal
              information. You may also unsubscribe from our mailing list or opt-out 
              of receiving promotional communications at any time. To exercise these 
              rights or for any privacy-related inquiries, please contact us using the 
              information provided below.</p>

            <h5 className='pt-3'><b>Changes to This Privacy Policy</b></h5>
            <p>We reserve the right to update or modify this Privacy Policy at any time. Any 
              changes will be posted on this page with a revised “Last Updated” date. We encourage
              you to review this Privacy Policy periodically to stay informed about how we collect,
              use, and protect your information</p>
            
            <h5 className='pt-3'><b>Contact Us</b></h5>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our
              privacy practices, please contact us at:</p>
            <p>Email: privacy@busroute.info</p>
          
        </div>
        <Footer/>
      </div>
    </>
  )
}
