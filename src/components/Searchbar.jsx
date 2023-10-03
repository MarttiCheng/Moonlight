import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Searchbar = ({onSearchSongs}) => {
  
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    onSearchSongs(event.target.value);
  };

  return (
    <div className='w-full h-[72px] flex items-center'>
      <div className='w-full relative flex justify-end mr-4'>
        <input
          type="text"
          placeholder="Type to search"
          value={searchTerm}
          onChange={handleInputChange}
          className='outline-none rounded-xl py-1 px-2 w-1/2'
        />
        <FaSearch className="absolute top-2 right-2 text-gray-400" />
      </div>
    </div>
  );
}

export default Searchbar;
