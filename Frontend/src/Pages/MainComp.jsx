import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from '../components/Navbar';
import Layout from '../components/Footer';
import axios from 'axios';
import Header from '../components/Header';
import apiRequest from '../lib/apiRequest.js'
const MainComp = () => {
  // Use useState as a hook
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    apiRequest.get("/")
      .then((res) => {
        // console.log(res.data);
        setAllData(res.data);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold mb-4">All Listings..!</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allData.map((listing) => (
            <div className="col-span-1" key={listing._id}>
              <Link to={`/register`} className="listing-link">
                <div className="relative listing-card border-none mb-8">
                  <img
                    src={listing.image}
                    alt="Listing_image"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 card-img-overlay opacity-0 hover:opacity-20 bg-white"></div>
                  <div className="p-4 card-body">
                    <p className="card-text">
                      <b>{listing.title}</b> <br />
                      {listing.price && (
                        <>
                          &#8377; {listing.price.toLocaleString('en-IN')} /night
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainComp;
