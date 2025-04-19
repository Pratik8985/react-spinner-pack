import { useState } from 'react';
import Spinner from './Spinner';

const App = () => {
  const [spinnerType, setSpinnerType] = useState<string>("dots");

  return (
    <div
      style={{
        display: 'flex',             // Use flexbox for centering
        justifyContent: 'center',    // Center horizontally
        alignItems: 'center',        // Center vertically
        height: '100vh',             // Full viewport height
        flexDirection: 'column',     // Stack items vertically (buttons, spinner)
        textAlign: 'center',         // Optional: align text center
        marginTop: '100px',          // Optional: control spacing if necessary
      }}
    >
      <button onClick={() => setSpinnerType("dots")}>Dots Spinner</button>
      <button onClick={() => setSpinnerType("circle")}>Circle Spinner</button>

      {spinnerType === "dots" && <Spinner type="dots" color="#007bff" size={40} />}
      {spinnerType === "circle" && <Spinner type="circle" color="#28a745" size={60} />}
    </div>
  );
};

export default App;
