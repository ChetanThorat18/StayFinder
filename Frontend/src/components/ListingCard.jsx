import React from 'react';
import { Link } from 'react-router-dom';

const ListingCard = ({ listing }) => {
  return (
    <div className="col-span-1">
      <Link to={`/listings/${listing._id}`} className="listing-link">
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
  );
};

export default ListingCard;
