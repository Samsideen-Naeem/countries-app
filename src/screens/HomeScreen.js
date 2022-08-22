import React, { useState, useEffect } from "react";

function HomeScreen() {
    const [countries, setCountries] = useState([]);
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        setIsPending(true)
fetch("https://restcountries.com/v3.1/all");
    }, [])
        .then((res) =>res.json()) 
        .then((data) => {
            setCountries(data);
        }).catch((err) => console.log("error: ", err))
    .finally(() => {})
    setIsPending(false);
    if (isPending) return<h1>loading....</h1>
  return (
    <div>
          {countries.map((country) => (
              <div class="card">
                  <img src={country.flags.png}/>
         </div> 
      ))}
    </div>
  )
}

export default HomeScreen
