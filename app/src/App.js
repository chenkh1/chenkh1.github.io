import React, { useState, useEffect } from 'react';
import './index.css'; 

function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [visiblePhoto, setVisiblePhoto] = useState(null);

  const photos = [
    { url: process.env.PUBLIC_URL + '/images/photo1.JPG', caption: 'Acorn Street!' },
    { url: process.env.PUBLIC_URL + '/images/Screenshot 2024-02-12 at 6.30.44 PM.png', caption: 'Chef Marsha!' },
    { url: process.env.PUBLIC_URL + '/images/Screenshot 2024-02-12 at 6.35.54 PM.png', caption: 'My Pretty Girl at Work!'},
    { url: process.env.PUBLIC_URL + '/images/photo4.JPG', caption: 'Boston Logan!' },
    { url: process.env.PUBLIC_URL + '/images/photo5.JPG', caption: 'Italian Food in North End!' },
    { url: process.env.PUBLIC_URL + '/images/photo6.JPG', caption: 'Getting Ready at Copley House!' },
    { url: process.env.PUBLIC_URL + '/images/Screenshot 2024-02-12 at 6.30.55 PM.png', caption: 'Beacon Hill Books :)' },
    { url: process.env.PUBLIC_URL + '/images/photo8.JPG', caption: 'Will You Be My Valentine?' },
  ];

  const togglePhotoVisibility = (index) => {
    setVisiblePhoto(visiblePhoto === index ? null : index);
  };

  return (
    <div className="app">
      <section className={`intro-section ${scroll ? 'lift-up' : ''}`}>
        <h2 className="intro-title">Hello My Pretty Girl :{')'}</h2>
      </section>
      <div className="photo-gallery">
        {photos.map((photo, index) => (
          <div key={index} className={`photo-container ${visiblePhoto === index ? 'visible' : ''}`} onClick={() => togglePhotoVisibility(index)}>
            {visiblePhoto === index ? (
              <>
                <img src={photo.url} alt={`Moment ${index + 1}`} className="photo" />
                <p className="caption">{photo.caption}</p>
              </>
            ) : (
              // Make sure you also move the heartImage to the public/images directory and update its path
              <img src={process.env.PUBLIC_URL + '/images/heart.png'} alt="Heart" className="heart-icon" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
