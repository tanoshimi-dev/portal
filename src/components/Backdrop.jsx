import React from 'react';

export const Backdrop = () => (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.4)',
      zIndex: 9999,
      transition: 'opacity 0.3s',
    }}
  />
);