import React from 'react'
import { useState, useEffect } from 'react'

export default function Index() {

    let [trips, setTrips] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/trips')
        .then(res => res.json())
        .then(data => setTrips(data));
    }, []);
    console.log(trips);

  return (
    <div>
        <h1>Let Go to Trip</h1>
        <ul>
            {trips.map(trip => (
                <li key={trip.id}>
                    <h2>{trip.name}</h2>
                    <p>price - {trip.price}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}
