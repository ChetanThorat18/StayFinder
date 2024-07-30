import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Navbar from '../components/Navbar';
import Layout from '../components/Footer';
import ListingCard from '../components/ListingCard';
import Header from '../components/Header';
import apiRequest from '../lib/apiRequest.js';

const Listings = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    apiRequest.get('/listings')
      .then((res) => {
        // console.log(res.data);
        setAllData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <Layout>
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-4">All Listings..!</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allData.map((listing) => (
              <ListingCard key={listing._id} listing={listing} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Listings;
