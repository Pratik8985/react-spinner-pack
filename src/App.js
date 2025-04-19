import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Spinner from './Spinner';
const App = () => {
    const [spinnerType, setSpinnerType] = useState("dots");
    return (_jsxs("div", { style: {
            display: 'flex', // Use flexbox for centering
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically
            height: '100vh', // Full viewport height
            flexDirection: 'column', // Stack items vertically (buttons, spinner)
            textAlign: 'center', // Optional: align text center
            marginTop: '100px', // Optional: control spacing if necessary
        }, children: [_jsx("button", { onClick: () => setSpinnerType("dots"), children: "Dots Spinner" }), _jsx("button", { onClick: () => setSpinnerType("circle"), children: "Circle Spinner" }), spinnerType === "dots" && _jsx(Spinner, { type: "dots", color: "#007bff", size: 40 }), spinnerType === "circle" && _jsx(Spinner, { type: "circle", color: "#28a745", size: 60 })] }));
};
export default App;
