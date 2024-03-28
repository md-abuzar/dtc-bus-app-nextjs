import dbconnection from "@/lib/dbconnection";

export default async function handler(req, res) {
    if (req.method === 'POST') {
    const {busNo} = req.body;
    try {
        const route_long_name = [busNo];

        // Step 1: Fetch route_id directly
        const [routeRows] = await dbconnection.execute('SELECT route_id FROM routes WHERE route_long_name = ?', route_long_name);
        const routeId = routeRows[0].route_id;

        // Step 2: Join stop_times and stops tables to get stop names directly
        const [stopRows] = await dbconnection.execute(`
            SELECT s.stop_name FROM stop_times st
            JOIN stops s ON st.stop_id = s.stop_id
            WHERE st.trip_id = ?`, [routeId]);

        const stopNames = stopRows.map(row => row.stop_name);

       // dbconnection.end();
        
        res.status(200).json({ results: stopNames });
        } catch (error) {
            res.status(500).json({ error:error.message});
        }
    }
}