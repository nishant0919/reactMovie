import React, { useState } from 'react';
import './Card.css'; 

const Cardcontainer = ({ imageSrc, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="contentInfo">
      <div className="contentTitle">
    <h1>Popular</h1>
    <div
      className="card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src='https://th.bing.com/th/id/OIP.ATDrvdlwYQboxpBGEeh3ZQAAAA?rs=1&pid=ImgDetMain' alt="GOT" className="card-image" />

      {isHovered && (
        <div className="card-description">
          <p className='card-title'>Game of Thrones</p>
          <p>Imdb - 9.2</p>
          <p className='card-desc'>Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for a millennia.</p>
          <button className='play-button'>Play</button>
        </div>
      )}
    </div>
      </div>
    </div>
  );
};

export default Cardcontainer;
