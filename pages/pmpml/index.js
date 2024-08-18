import Head from 'next/head'
import Navbar from '@/components/Navbar'
import SearchBar from '@/components/pmpml/SearchBar';
import Footer from '@/components/Footer';


export default function Home() {
  
  return (
    <>
      <Head>
        <title>PMPML Bus Route | Pune City Bus Routes</title>
        <meta name="description" content="Get PMPML Pune city bus routes and track it on map. Search all types of Pune city bus route and stop details in just one click" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='body'>
        <Navbar/>
        <div className="container-fluid form-container-pmpl text-center pt-4 pb-5">
          <h1 className="pt-5">PMPML Bus Route</h1>
          <SearchBar/>
        </div>

        <div className="container dtc-bus-route-container mt-4 pt-3 pb-5 px-4">
          <h2 className='pt-3'><strong>PMPML Bus Route</strong></h2>
          <p>PMPML is the Pune city bus routes that helps punekars to easily find the routes of Pune city buses, making it
          convenient for the passengers to travel from one bus place to another.</p>
          <p>If you want to check PMPML bus route, you simply need to enter the bus number in the search field 
          and then click on search button. In just few seconds you will get all the bus route details along 
          with information such as total number of bus stops and list of all bus stops that particular 
          bus is going to cover.</p>

          <h2 className='pt-3'><strong>How to Check PMPML Bus Route?</strong></h2>
          <p>BusRoute is one of the best website to check the bus routes of any Pune city bus online through any basic 
            smart phone that has an internet connectivity. Just follow below steps to get bus route details of any bus:</p>
            <ul>
              <li className="pt-2">Visit www.busroutes.info website throught any mobile phone or computer.</li>
              <li className="pt-2">Now just start typing the PMPML bus number or bus route number in the input search box.</li>
              <li className="pt-2">As soon as you start typing the bus number, you will start getting suggestion of bus number
                along with destination bus stop exactly same as displayed on bus LED display of buses. 
              </li>
              <li className="pt-2">Scroll through the bus number and select whose bus route you want to know.</li>
              <li className="pt-2">Once selected, just click on the search button.</li>
              <li className="pt-2">As soon as you hit on the search button, you will be displayed with all the bus routes 
              along with all basic details like source bus stop name, destination bus stop and total number 
              of bus stops that bus is going to cover throught its entire journey.</li>
            </ul>
           
          <h2 className='pt-3'><b>What is PMPML?</b></h2>
          <p>PMPL stands for Pune Mahanagar Parivahan Mahamandal Limited. It is one of the best goverment bus service in the city 
            that runs on CNG.</p>
          <p>This is one of the most popular, convenient and affordable means of transport for public passengers.</p>
         
          <h5><strong>Types of PMPML Buses:</strong></h5>
          <p>There are mainly two types of buses run by PMPML.</p>

          <h6><b>AC Bus:</b></h6>
          <p>These are fully air-conditioned low floor buses that is operated by PMPML. These buses have 
            little higher fare than other buses.</p>
          
          <h6><b>Normal Buses:</b></h6>
          <p>These are normal buses run by PMPML. Such type of buses have normal fare between Rs. 5 to Rs. 15.</p>
        </div>
        <Footer/>
      </div>
    </>
  )
}
