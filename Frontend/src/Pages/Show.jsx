// Show.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Layout from '../components/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import Edit from '../components/Edit';
import Cal from '../components/Calc';
import Header from '../components/Header';
import apiRequest from '../lib/apiRequest';

const Show = () => {
  const { id } = useParams();
  const [currentListing, setCurrentListing] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    console.log('Edit button clicked');
    setIsModalOpen(true);
  };

  useEffect(() => {
    apiRequest.get(`/listings/${id}`)
      .then((response) => {
        setCurrentListing(response.data);
      })
      .catch((error) => {
        console.error('Error fetching listing:', error);
      });
  }, [id]);

  const navigate = useNavigate();

  if (!currentListing) {
    return <p>Listing not found!</p>;
  }

  const handleDelete = async () => {
    try {
      await apiRequest.delete(`/listings/${id}`);
      navigate('/listings');
    } catch (error) {
      console.error('Error deleting listing:', error);
    }
  };

  const handleEditSubmit = async (updatedData) => {
    try {
      await apiRequest.put(`/listings/${id}`, updatedData);
      setIsModalOpen(false);
      // Refresh the current listing data
      apiRequest.get(`/listings/${id}`)
        .then((response) => {
          setCurrentListing(response.data);
        });
    } catch (error) {
      console.error('Error editing listing:', error);
    }
  };

  return (
    <>
      <Header />
      <Layout>
        <div className="row mt-3">
          <div className="col-8 offset-3">
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{currentListing.title}</h2>
          </div>

          <div className="card col-6 offset-3 show-card listing-card">
            <img src={currentListing.image} className="card-img-top show-img" alt="Listing_img" />
            <div className="card-body">
              <p className="card-text">
                <br />
                {currentListing.description} <br />
                &#8377; {currentListing.price.toLocaleString('en-IN')} <br />
                {currentListing.location} <br />
                {currentListing.country} <br />
              </p>
            </div>
          </div>

          <div className="btns">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full offset-3" onClick={handleEditClick}>
              Edit
            </button>

            <form onSubmit={(e) => { e.preventDefault(); handleDelete(); }}>
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full offset-5"
              >
                Delete
              </button>
            </form>
          </div>
<Cal price={currentListing.price} />


          {isModalOpen && (
            <div className="modal">
              <Edit
                initialData={currentListing} // Pass the initial data to the Edit component
                onSubmit={handleEditSubmit} // Pass the submit handler to the Edit component
              />
              <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
            </div>
          )}
          <div className="col-8 offset-3">
            <h4 className="mt-3">Leave a Review</h4>
            <form action={`/listings/${currentListing._id}/reviews`} method="POST" className="needs-validation" noValidate>
              <Rating value={4} onChange={4} />
              <div className="mb-3 mt-3">
                <label htmlFor="comment" className="form-label">
                  Comment
                </label>
                <textarea className="form-control" name="review[comment]" id="comment" cols="30" rows="5" required></textarea>
                <div className="invalid-feedback">Please add some comment for review</div>
              </div>
              <button className="btn btn-outline-dark mb-3">Submit</button>
            </form>

            <hr />

            <p>
              <b>All Reviews</b>
            </p>
            <div className="row">
              {currentListing.reviews.map((review) => (
                <div key={review._id} className="card col-5 ms-3 mb-3">
                  <div className="card-body">
                    <h5 className="card-title">User</h5>
                    <p className="card-text">{review.comment}</p>
                    <p className="card-text">{review.rating} stars</p>
                  </div>
                  <form className="mb-3 mt-2" action={`/listings/${currentListing._id}/reviews/${review._id}?_method=DELETE`} method="POST">
                    <button className="btn btn-dark">Delete</button>
                  </form>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Show;