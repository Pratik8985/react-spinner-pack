import React from 'react';
import { SpinnerProps } from './types';
import Dots from './spinners/Dots';
import Circle from './spinners/Circle';

const Spinner: React.FC<SpinnerProps> = ({ type = 'circle', ...props }) => {
  const components: Record<string, React.FC<SpinnerProps>> = {
    dots: Dots,
    circle: Circle,
  };

  const Selected = components[type] || Circle;
  return <Selected {...props} />;
};

export default Spinner;
