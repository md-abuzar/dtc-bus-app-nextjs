import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';

export default function About() {
  
  return (
    <>
      <Head>
        <title>About Us - BusRoute.info</title>
        <meta name="description" content="About Us of BusRoute.info" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='body'>
        <Navbar/>

        <div className="container dtc-bus-route-container mt-4 pt-3 pb-5 px-4">
          <h1 className='py-3 text-center'>About BusRoute</h1>
          <p>Hello, I am blogger as well as professional traveller who loves to explore
            different cities around the world and this website BusRoute.info is created and managed by me.</p>
          <p>The purpose of this blog is to help those passengers that make use of city bus like DTC bus for
            daily travelling by providing with bus route information accuratley and upto date.</p>       
          <p>I myself live in Delhi and using DTC bus for more than 7 years for travelling through out the 
            city and thus helping others by providing all the information related to Delhi city bus that is DTC bus.
            </p>
        </div>
        <Footer/>
      </div>
    </>
  )
}
