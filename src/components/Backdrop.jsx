import React from 'react';

export const Backdrop = (props) => {



  return (
    <>
      {/* <div style={{ position: 'fixed', top: 110, zIndex: 19999 }}>
        <button onClick={props.onClose}>Stop</button>
      </div> */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(229, 225, 252, 0.3)',
          zIndex: 9999,
          transition: 'opacity 0.3s',
        }}
      />
      <div style={{ position: 'fixed', bottom: '5vh', zIndex: 19999, right: '5vw' }}>
        <img
          onClick={props.onClose}
          src="/assets/icons/pause.svg" 
          alt="Play"
          style={{ width: 48, height: 48, cursor: 'pointer', borderRadius: '50%', boxShadow: '0 0 6px rgba(0,0,0,0.5)' }}
        />
      </div>      
    </>
  );
}