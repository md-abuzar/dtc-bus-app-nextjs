import Head from "next/head";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../../components/Map'), { ssr: false });

const RouteDetails = ({ busNo, routeDetails }) => {
  const [loading, setLoading] = useState(true);
  const busName = busNo.replace(/UP|DOWN/g, "");
  useEffect(() => {
    setLoading(false);
  }, []);
  
  return (
    <>
    <Head>
      <title>{busName} PMPML Bus Route | From {routeDetails.stops[0].stop_name} to {routeDetails.stops[routeDetails.stops.length-1].stop_name}</title>
      <meta name="description" content="Get PMPML Bus Route - All Pune city bus routes, timings and stops." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar/>
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-5">
          <div className="container bus-info-header-pmpml">
            <h5 className="text-center py-2">{busName} PMPML Bus Route</h5>
          </div>
        <div className="container bus-info-pmpml py-2">
          <h6><strong>From:</strong> {routeDetails.stops[0].stop_name}</h6>
          <h6><strong>To:</strong> {routeDetails.stops[routeDetails.stops.length-1].stop_name}</h6>
          <h6><strong>Total Stops:</strong> {routeDetails.stops.length}</h6>
        </div>
          <ul className="timeline-pmpml">
            {routeDetails.stops.map((stop) => {
              return (
                <li>
                  <h6>{stop.stop_name}</h6>
                </li>
              );
            })}
          </ul>
        </div>
          
        <div className="col-sm-7 ">
          <div className="map-container">
            <Map stops={routeDetails.stops} />
          </div>
        </div>

      </div>

      <div className="container PMPML-bus-route-container mt-4 pt-3 pb-5 px-4">
          <h2 className='pt-3'><strong>How many stops does {busName} PMPML bus Route has?</strong></h2>
          <p> There are total {routeDetails.stops.length} stops in {busName} PMPML bus route.</p>

          <h2 className='pt-3'><strong>What is the source and destination stop of {busName} PMPML bus?</strong></h2>
          <p>The {busName} PMPML bus starts from {routeDetails.stops[0].stop_name} and the last stop where it 
            ends its journey is {routeDetails.stops[routeDetails.stops.length-1].stop_name}. </p>
           
          <h2 className='pt-3'><b>What is fare of {busName} PMPML bus?</b></h2>
          <p>The fare of bus depends upon the type of bus that you are going to choose for travelling.</p>
          <p>If the {busName} is ordinary bus or non-air conditioned bus then the fare may vary between
          Rs. 5 to Rs. 15 and if it is fully air-conditioned bus then the ticket price will be somewhere between Rs. 10 to 
          Rs. 30 depending upon the source and destination stop.</p>
        </div>
    </div>
    <Footer/>
  </>
  );
};

export async function getStaticPaths() {
  const response = await fetch(`https://api.busroute.info/api/v1/pmpml/routes`)
  const data = await response.json();
  const paths = data.map(route => {
    return {
      params : {
        busNo:'333'
      }
    }
  });

  return {
    paths:paths,
  fallback: false,
  }
}


export async function getStaticProps({ params }) {
  const { busNo } = params;

  try {
    // Fetch route details from the API using busNumber
    const response = await fetch(`https://api.busroute.info/api/v1/pmpml/stops`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "route_id": busNo }),
    });

    if (response.ok) {
      const routeDetails = await response.json();

      return {
        props: {
          busNo,
          routeDetails,
        },
      };
    } else {
      console.error('Failed to fetch data:', response.status);
      return {
        props: {
          busNo,
          routeDetails: null,
        },
      };
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        busNo,
        routeDetails: null,
      },
    };
  }
}

export default RouteDetails;