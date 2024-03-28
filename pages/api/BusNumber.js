import mysql from 'mysql2/promise';
import dbconnection from '@/lib/dbconnection';

export default async function handler(req, res) {
      
  try {
    const query = 'SELECT route_long_name, route_name FROM routes_txt'
    const values = [];
    const [data] = await dbconnection.execute(query, values);

    // Close the database connection
    //dbconnection.end();
    res.status(200).json({ results: data });
  } catch (error) {
    res.status(500).json({ error:error.message});
  }
}