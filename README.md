# React Spinner Kit

A lightweight, customizable React spinner package with multiple spinner types. By default, it includes a circle spinner and a dot spinner, but you can easily extend it to add more spinners as needed.

---

## Installation

You can install the `react-spinner-kit` package via npm or yarn.

### npm:

```bash
npm install react-spinner-kit

yarn:
yarn add react-spinner-kit


Usage
After installing the package, you can import and use the spinner component in your React project.
Basic Usage

import React from 'react';
import Spinner from 'react-spinner-kit';

const App = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <Spinner color="#007bff" size={40} />
    </div>
  );
};

export default App;

By default, the spinner will render a circle spinner.


Spinner Types
The spinner component supports the following spinner types:

circle (default)

dots

You can change the spinner type by passing the type prop.

Example:

import React, { useState } from 'react';
import Spinner from 'react-spinner-kit';

const App = () => {
  const [spinnerType, setSpinnerType] = useState('dots');

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <button onClick={() => setSpinnerType('dots')}>Dots Spinner</button>
      <button onClick={() => setSpinnerType('circle')}>Circle Spinner</button>

      <Spinner type={spinnerType} color="#007bff" size={40} />
    </div>
  );
};

export default App;


Customizing the Spinner
You can customize the spinner's appearance by passing the following props:

color: Sets the spinner's color (default: #000).

size: Sets the spinner's size (default: 40px).

type: The spinner type. Options are circle (default) and dots.

Example Usage:
tsx
Copy
Edit


<Spinner type="dots" color="#ff5733" size={50} />
<Spinner type="circle" color="#28a745" size={60} />

Available Props

Prop | Type | Default Value | Description
color | string | #000 | The color of the spinner.
size | number | 40 | The size of the spinner in pixels.
type | string | circle | The spinner type. Options are circle and dots.

Additional Notes
Circle Spinner: A spinning circle with a border and animated rotation.

Dots Spinner: A set of dots that bounce in and out, creating a loading effect.

CSS Animations
Ensure the following animations are included globally or in your project's CSS file


@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}


Extending with New Spinners
To add more spinners in the future, simply create a new spinner component (like Circle or Dots), and update the Spinner.tsx file to include the new component in the components object. The Spinner component will automatically render the new spinner type when specified.


License
MIT License. See LICENSE for more details.


