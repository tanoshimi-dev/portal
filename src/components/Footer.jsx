import React, { useState, useEffect } from 'react';


import { Backdrop } from './Backdrop';

export const Footer = () => {
  
  const [showBackdrop, setShowBackdrop] = useState(false);

  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const playSound = async () => {
    
    setShowBackdrop(true); 
    const audio = document.getElementById('myAudio');

    audio.play();
    
    // 2. Scroll to bottom
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

    // 3. Wait 3 sec
    await wait(1000);

    // 4. link2.click()
    const link2 = document.getElementById('link_skills');
    if (link2) link2.click();

    // 5. Wait 3 sec
    await wait(1000);
    // 2. Scroll to bottom
    window.scrollTo({ top: document.body.scrollHeight+200, behavior: 'smooth' });
    
    await wait(1000);

    const link3 = document.getElementById('link_contact');
    if (link3) link3.click();



  };

  const stopSound = () => {
    const audio = document.getElementById('myAudio');
    audio.pause();
    audio.currentTime = 0; // Reset the audio to the beginning
    // 9. Hide backdrop
    setShowBackdrop(false);

  };  
  


  return (
    <>
      {showBackdrop && <Backdrop />} 
      <div className="footer_links">
              
              <button onClick={playSound}>Play</button>
              <button onClick={stopSound}>Stop</button>
        ©2025 Tanoshimi.dev All Rights Reserved
      </div>
    </>
  );

};