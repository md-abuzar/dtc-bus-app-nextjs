import Head from 'next/head'
import Navbar from '@/components/Navbar'
import SearchBar from '@/components/SearchBar';
import Footer from '@/components/Footer';


export default function Home() {
  
  return (
    <>
      <Head>
        <title>DTC Bus Route</title>
        <meta name="description" content="Get DTC Bus Route. Search all types of Delhi bus route and stop details in just one click" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='body'>
        <Navbar/>
        <div className="container-fluid form-container text-center pt-4 pb-5">
          <h1 className="pt-5">DTC Bus Route</h1>
          <SearchBar/>
        </div>

        <div className="container dtc-bus-route-container mt-4 pt-3 pb-5 px-4">
          <h2 className='pt-3'><strong>DTC Bus Route</strong></h2>
          <p>DTC bus routes helps travellers to easily find the routes of Delhi city buses, making it
          convenient for the passengers to travel from one bus stop to another.</p>
          <p>In order to check DTC bus route, you simply need to enter the bus number in the search field 
          and then click on search button. In fraction of seconds you will get all the bus route details along 
          with information such as total number of bus stops and list of all bus stops that particular 
          bus is going to cover.</p>

          <h2 className='pt-3'><strong>How to Check DTC Bus Route?</strong></h2>
          <p>BusRoute is one of the best website to check the bus routes of any Delhi city bus online through any basic 
            smart phone that has an internet connectivity. Just follow below steps to get bus route details of any bus:</p>
            <ul>
              <li className="pt-2">Visit www.busroutes.info website throught any mobile phone or computer.</li>
              <li className="pt-2">Now just start typing the DTC bus number or bus route number in the input search box.</li>
              <li className="pt-2">As soon as you start typing the bus number, you will start getting suggestion of bus number
                along with destination bus stop exactly same as displayed on bus LED display of buses. 
              </li>
              <li className="pt-2">Scroll through the bus number and select whose bus route you want to know.</li>
              <li className="pt-2">Once selected, just click on the search button.</li>
              <li className="pt-2">As soon as you hit on the search button, you will be displayed with all the bus routes 
              along with all basic details like source bus stop name, destination bus stop and total number 
              of bus stops that bus is going to cover throught its entire journey.</li>
            </ul>
           
          <h2 className='pt-3'><b>What is DTC?</b></h2>
          <p>DTC stands for Delhi Transport Corporation. It is one of the most largest bus service provider among city 
            buses in Delhi that runs on CNG.</p>
          <p>This is one of the most popular, convenient and affordable means of transport for public passengers.</p>
         
          <h5><strong>Types of DTC Buses:</strong></h5>
          <p>There are mainly three types of buses run by DTC that can be easily differntaited on the 
            basis of colors that is red, green and orange.</p>

          <h6><b>Red Buses:</b></h6>
          <p>These are fully air-conditioned low floor buses that is operated by DTC. These buses have 
            little higher fare than other buses.</p>
          
          <h6><b>Green Buses:</b></h6>
          <p>These are normal low floor buses run by DTC. Such type of buses have normal fare between Rs. 5 to Rs. 15.</p>
          
          <h6><b>Orange Buses:</b></h6>
          <p>Such type of buses are operated by DTC in collaboration with Delhi Integrated Multi-model Transit System( DIMTS). 
            These are normal buses with normal fare between Rs. 5 to Rs. 15.</p>
        </div>
        <Footer/>
      </div>
    </>
  )
}
