import React from 'react';

const Rating = ({ value, onChange }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div>
      <label htmlFor="rating" className="form-label">
        Rating
      </label>
      <div>
        {stars.map((star) => (
          <label
            key={star}
            className="star-label"
            style={{ marginRight: '5px', display: 'inline-block' }}
          >
            <input
              type="radio"
              name="rating"
              id={`star-${star}`}
              value={star}
              checked={value === star}
              onChange={() => onChange(star)}
            />
            <span
              className="star"
              style={{
                fontSize: '20px',
                color: 'gold',
                cursor: 'pointer',
                display: 'inline-block',
              }}
            >
              &#9733;
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Rating;
