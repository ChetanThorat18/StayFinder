import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Cal = ({price}) => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guestCount, setGuestCount] = useState(1);


  const calculateTotalAmount = () => {
    // Use the price prop to calculate the total amount
    const numberOfNights = checkInDate && checkOutDate ? Math.ceil((checkOutDate - checkInDate) / (24 * 60 * 60 * 1000)) : 0;
    return price * numberOfNights * guestCount;
  };

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutChange = (date) => {
    setCheckOutDate(date);
  };

  const handleGuestCountChange = (e) => {
    setGuestCount(e.target.value);
  };

//   const calculateTotalAmount = () => {
//     // Assuming a static price per night (₹5,846 in this case)
//     const pricePerNight = 5846;
//     const numberOfNights = checkInDate && checkOutDate ? Math.ceil((checkOutDate - checkInDate) / (24 * 60 * 60 * 1000)) : 0;

//     // Multiply price per night by number of nights and guest count
//     return pricePerNight * numberOfNights * guestCount;
//   };

  const handleReserveClick = () => {
    // Implement your reservation logic here
    console.log('Reservation button clicked!');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 border-slate-800 rounded-lg shadow-2xl mt-5 mb-5">
      {/* Property Price per Night */}
      <div className="mb-4 flex items-start">
        <p className="text-2xl font-semibold text-gray-800">₹{price}</p>&nbsp;&nbsp;
        <sub><p className="text-sm text-gray-500 text-left">per night</p></sub>
      </div>

      {/* Check-in and Check-out in a row */}
      <div className="mb-4 flex items-center">
        <div className="mr-4">
          <label className="text-gray-700">Check In</label>
          <DatePicker
            selected={checkInDate}
            onChange={handleCheckInChange}
            className="border rounded px-3 py-2 text-sm w-32 border-gray-300" // Adjust size and color here
          />
        </div>
        <div>
          <label className="text-gray-700">Check Out</label>
          <DatePicker
            selected={checkOutDate}
            onChange={handleCheckOutChange}
            minDate={checkInDate} // Set minDate to checkInDate
            className="border rounded px-3 py-2 text-sm w-32 border-gray-300" // Adjust size and color here
          />
        </div>
      </div>

      {/* Guest Count */}
      <div className="mb-4">
        <label className="text-gray-700">Guests</label>
        <input
          type="number"
          min="1"
          value={guestCount}
          onChange={handleGuestCountChange}
          className="w-full border rounded px-3 py-2 mt-1 border-gray-300" // Adjust size and color here
        />
      </div>

      {/* Reserve Button */}
      <button onClick={handleReserveClick} className="bg-red-500 text-white px-10 py-3 rounded-full mt-5 mb-10 text-center mx-auto block">
        Reserve
      </button>

      <hr />
      {/* Total Amount */}
      <div className="flex mt-5 justify-between text-lg text-gray-800">
        <span>Total Amount: ₹{calculateTotalAmount()}</span>
        <span>{checkInDate && checkOutDate ? Math.ceil((checkOutDate - checkInDate) / (24 * 60 * 60 * 1000)) : 0} nights</span>
      </div>
    </div>
  );
};

export default Cal;