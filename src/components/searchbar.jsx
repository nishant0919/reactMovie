import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";




const SearchBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsHovered(true)}
        onAbort={() => setIsHovered(false)}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        {isHovered ? (
          <input
            type="text"
            placeholder="Search..."
         />
        ) : (
          <div>
           
            <ul>

            <span aria-label="Search Icon">
              <FaSearch/>
            </span>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
