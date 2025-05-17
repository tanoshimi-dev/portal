import React, { useState, useEffect } from 'react';


import { Backdrop } from './Backdrop';

export const AutoplayButton = () => {

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

    const link3 = document.getElementById('link_licenses');
    if (link3) link3.click();

    await wait(1000);
    const license_1 = document.getElementById('license_1');
    if (license_1) license_1.click();

    await wait(1000);
    const license_2 = document.getElementById('license_2');
    if (license_2) license_2.click();

    await wait(1000);
    const license_3 = document.getElementById('license_3');
    if (license_3) license_3.click();
    
    await wait(1000);
    const license_4 = document.getElementById('license_4');
    if (license_4) license_4.click();

    await wait(1000);
    const license_5 = document.getElementById('license_5');
    if (license_5) license_5.click();

     await wait(1000);
    const link_projects = document.getElementById('link_projects');
    if (link_projects) link_projects.click();

    await wait(1000);
    const project_1 = document.getElementById('project_1');
    if (project_1) project_1.click();


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
      {showBackdrop && <Backdrop onClose={stopSound}/>} 
      <div style={{ position: 'fixed', bottom: 300, zIndex: 19999 }}>
         <button onClick={playSound}>Play</button>
      </div>
    </>
  );
}