//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = 'https://busroute.info/pmpml';

function generateSiteMap(data) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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

function SiteMap({ sitemap }) {
  return <pre>{sitemap}</pre>;
}

export async function getStaticProps() {
  // We make an API call to gather the URLs for our site
  const request = await fetch(`http://3.111.212.44:5000/api/v1/pmpml/routes_id`);
  const data = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(data);

  return {
    props: {sitemap,},
  };
}

export default SiteMap;
