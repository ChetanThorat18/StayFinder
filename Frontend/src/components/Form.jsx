import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import apiRequest from '../lib/apiRequest';

const AddNewForm = () => {

  

  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formImage, setFormImage] = useState("");
  const [formPrice, setFormPrice] = useState("");
  const [formCountry, setFormCountry] = useState("");
  const [formLocation, setFormLocation] = useState("");

  const handleTitleChange = (e) => {
    setFormTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setFormDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setFormImage(e.target.value);
  };

  const handlePriceChange = (e) => {
    setFormPrice(e.target.value);
  };

  const handleCountryChange = (e) => {
    setFormCountry(e.target.value);
  };

  const handleLocationChange = (e) => {
    setFormLocation(e.target.value);
  };
  const navigate = useNavigate();

  // Function to handle input changes and update state
 
  const listing = {
    title:formTitle,
    description:formDescription,
    image:formImage,
    price:formPrice,
    country:formCountry,
    location:formLocation,
  }
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // JSON.stringify({ listing: formData });

    const apiUrl = '/listings';

    try {
      console.log("Before Axios");
      // Use Axios to send a POST request
      const response = await apiRequest.post(apiUrl,  listing);
      console.log("After Axios");

      if (response.status === 200) {
        // Set the state to trigger redirection
        console.log("Resposne 200 in react")
        navigate('/listings');
      } else {
        // Handle errors if needed
        console.error('Failed to save data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-8 offset-2">
          <h3 className="mt-2" style={{ fontSize: '2rem' , marginBottom:'2rem'}}><b>Create a New Listing</b></h3>
          <form method="POST" onSubmit={handleSubmit }  >
            <div className="mb-4">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input type="text" name="title" placeholder="Enter title" className="form-control"   onChange={handleTitleChange}/>
              {/* <div className="valid-feedback">Looks good!</div> */}
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea name="description" className="form-control"  onChange={handleDescriptionChange} ></textarea>
              {/* <div className="invalid-feedback">Please enter a short description</div> */}
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="form-label">
                Image Link
              </label>
              <input type="text" name="image" placeholder="Enter image URL/Link" className="form-control"  onChange={handleImageChange} />
            </div>

            <div className="row">
              <div className="mb-4 col-md-4">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input name="price" placeholder="Enter price ₹" className="form-control"  onChange={handlePriceChange} />
                {/* <div className="invalid-feedback">Please enter a valid Price.</div> */}
              </div>
              <div className="mb-4 col-md-8">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input type="text" name="country" placeholder="India" className="form-control"  onChange={handleCountryChange}/>
                {/* <div className="invalid-feedback">Please enter a valid country.</div> */}
              </div>
            </div>

            <div className="mb-1">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input type="text" name="location" placeholder="Enter location" className="form-control"   onChange={handleLocationChange}/>
              {/* <div className="invalid-feedback">Please enter a valid location.</div> */}
            </div>

            <br />
            <br />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-3" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewForm;
