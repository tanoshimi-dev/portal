import React, { useEffect } from 'react';
export const Footer = () => {

  const playSound = () => {
    const audio = document.getElementById('myAudio');
    audio.play();
        // Scroll the page
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

        // Click the links
        const link2 = document.getElementById('link_skills');
        const link3 = document.getElementById('link_contact');

        if (link2) link2.click();
       // if (link3) link3.click();
  };

  const stopSound = () => {
    const audio = document.getElementById('myAudio');
    audio.pause();
    audio.currentTime = 0; // Reset the audio to the beginning
  };  
  
  return (
    <div className="footer_links">
      <button onClick={playSound}>Play</button>
      <button onClick={stopSound}>Stop</button>      
      ©2025 Tanoshimi.dev All Rights Reserved
    </div>
  );

};