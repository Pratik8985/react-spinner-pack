import React from 'react';
import { SpinnerProps } from '../types';

const Circle: React.FC<SpinnerProps> = ({ size = 40, color = '#000', className }) => {
  const style: React.CSSProperties = {
    border: `${size / 10}px solid #eee`,
    borderTop: `${size / 10}px solid ${color}`,
    borderRadius: '50%',
    width: size,
    height: size,
    animation: 'spin 1s linear infinite'
  };

  return <div className={className} style={style}></div>;
};

export default Circle;
