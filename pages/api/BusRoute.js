import dbconnection from "@/lib/dbconnection";

export default async function handler(req, res) {
    if (req.method === 'POST') {
    const {busNo} = req.body;
    try {
        const route_long_name = [busNo];

        const [route] = await dbconnection.execute('SELECT route_long_name FROM routes_txt WHERE route_name = ?', route_long_name);

       // dbconnection.end();
        
        res.status(200).json({ results: route });
        } catch (error) {
            res.status(500).json({ error:error.message});
        }
    }
}