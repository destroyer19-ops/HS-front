import React, { useState } from 'react';

const Dob = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = () => {
    // Save selectedDate in your database here
    console.log('Selected Date:', selectedDate);
  };

  return (
    <section className='bg-gray-100 h-screen flex justify-center items-center'>
      <div className='bg-white w-2/3 max-w-lg rounded-lg p-8 shadow-md'>
        <h2 className='text-3xl font-semibold mb-4 text-center'>Add Your Birthday</h2>
        <div className='mb-6'>
          <label className='block text-gray-600 text-sm font-semibold mb-2'>Select Date</label>
          <div className='relative'>
            <input
              type='date'
              className='w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500'
              onChange={handleDateChange}
            />
            <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-gray-400'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <button
            className='bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out'
            type='button'
            onClick={handleSubmit}
          >
            Save Birthday
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dob;
