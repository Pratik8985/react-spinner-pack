import React from 'react';
import { SpinnerProps } from '../types';

const Dots: React.FC<SpinnerProps> = ({ size = 24, color = '#000', className }) => {
  const dotStyle: React.CSSProperties = {
    width: size / 4,
    height: size / 4,
    margin: size / 10,
    backgroundColor: color,
    borderRadius: '50%',
    display: 'inline-block',
    animation: 'bounce 1.4s infinite ease-in-out both'
  };

  return (
    <div className={className} style={{ display: 'flex', justifyContent: 'center' }}>
      <span style={{ ...dotStyle, animationDelay: '0s' }} />
      <span style={{ ...dotStyle, animationDelay: '0.2s' }} />
      <span style={{ ...dotStyle, animationDelay: '0.4s' }} />
    </div>
  );
};

export default Dots;
