import React from 'react';

export const Backdrop = (props) => {



  return (
    <>
      <div style={{ position: 'fixed', top: 110, zIndex: 19999 }}>
        <button onClick={props.onClose}>Stop</button>
      </div>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(229, 225, 252, 0.3)',
          zIndex: 9999,
          transition: 'opacity 0.3s',
        }}
      />
    </>
  );
}