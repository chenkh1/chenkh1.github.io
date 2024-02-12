import React, { useState, useEffect } from 'react';
import './index.css'; 
import photo1 from '/Users/chenchen/cs-1224-projectv/app/src/photo1.JPG';
import photo2 from '/Users/chenchen/cs-1224-projectv/app/src/Screenshot 2024-02-12 at 6.30.44 PM.png';
import photo3 from '/Users/chenchen/cs-1224-projectv/app/src/Screenshot 2024-02-12 at 6.35.54 PM.png';
import photo4 from '/Users/chenchen/cs-1224-projectv/app/src/photo4.JPG';
import photo5 from '/Users/chenchen/cs-1224-projectv/app/src/photo5.JPG';
import photo6 from '/Users/chenchen/cs-1224-projectv/app/src/photo6.JPG';
import photo7 from '/Users/chenchen/cs-1224-projectv/app/src/Screenshot 2024-02-12 at 6.30.55 PM.png';
import photo8 from '/Users/chenchen/cs-1224-projectv/app/src/photo8.JPG';
import heartImage from '/Users/chenchen/cs-1224-projectv/app/src/pngtree-smooth-glossy-heart-vector-file-ai-and-png-png-image_4557871.png'; 

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
    { url: photo1, caption: 'Acorn Street!' },
    { url: photo2, caption: 'Chef Marsha!' },
    { url: photo3, caption: 'My Pretty Girl at Work!' },
    { url: photo4, caption: 'Boston Logan!'},
    { url: photo5, caption: 'Italian Food in North End!' },
    { url: photo6, caption: 'Getting Ready at Copley Place!' },
    { url: photo7, caption: 'Beacon Hill Books :)' },
    { url: photo8, caption: 'Will You Be My Valentine?' },
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
              <img src={heartImage} alt="Heart" className="heart-icon" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
