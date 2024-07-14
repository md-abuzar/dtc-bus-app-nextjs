import React, {useState, useEffect} from "react";
import { useRouter } from 'next/router';


const SearchBar = () => {

    const router = useRouter();
    const [busNo, setBusNo] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch("https://api.busroute.info/api/v1/routes");
                const result = await response.json();
                setSuggestions(result);
            } catch (error) {
                console.error('Error fetching suggestions:', error);
            }    
        };
        fetchData();
    }, []);

    const filteredSuggestion = busNo ? suggestions.filter((route) =>
        route.toLowerCase().includes(busNo.toLowerCase())
    ) : [];

    const handleSuggestionClick = (route) => {
        setBusNo(route);
        setSuggestions([]);
      };


      const onSubmit = async() => {
        try {
          const response = await fetch('https://api.busroute.info/api/v1/num', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({"route":busNo}),
          });
        
          if (response.ok) {
            const data = await response.json();
            router.push(`/dtc/${data}`);
            console.log('Data sent successfully!');
            
          } else {
            console.error('Failed to send Data.');
          }
        } catch (error) {
          console.error('Error sending data:', error);
        }
        

      //router.push(`/routes/${busNo}`);
      
      }
    

    return (
        <>
        <div className="container mt-4 pb-4">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="input-group autocomplete-container">
                <input type="text" className="form-control searchInput py-2" name="bus_number" autoComplete="off" value={busNo} onChange={(e) => setBusNo(e.target.value)} placeholder="Search..." />
                <button className="btn btn-primary searchButton px-3" onClick={onSubmit}>Search</button>
                <div className="autocomplete-suggestions">
                    {filteredSuggestion.map((route, index) => (
                    <div
                      key={index}
                      className="suggestion-item"
                      onClick={() => handleSuggestionClick(route)}
                    >
                      {route}
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    );
};

export default SearchBar;
