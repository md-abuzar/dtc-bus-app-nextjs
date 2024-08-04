//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = 'https://busroute.info/dtc';

function generateSiteMap(data) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
    <loc>https://busroute.info/</loc>
    <lastmod>2024-07-25T09:03:46+00:00</lastmod>
    <priority>1.00</priority>
    </url>
    <url>
    <loc>https://busroute.info/about</loc>
    <lastmod>2024-07-25T09:03:46+00:00</lastmod>
    <priority>0.70</priority>
    </url>
    <url>
    <loc>https://busroute.info/privacy-policy</loc>
    <lastmod>2024-07-25T09:03:46+00:00</lastmod>
    <priority>0.70</priority>
    </url>
    <url>
    <loc>https://busroute.info/disclaimer</loc>
    <lastmod>2024-07-25T09:03:46+00:00</lastmod>
    <priority>0.70</priority>
    </url>
    <url>
    <loc>https://busroute.info/terms-conditions</loc>
    <lastmod>2024-07-25T09:03:46+00:00</lastmod>
    <priority>0.70</priority>
    </url>

     ${data
       .map(path => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${path}`}</loc>
           <lastmod>2024-07-25T09:03:46+00:00</lastmod>
           <priority>0.80</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(`https://api.busroute.info/api/v1/routes_long_name`);
  const data = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(data);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
