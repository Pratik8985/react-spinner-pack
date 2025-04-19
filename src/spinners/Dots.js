import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Dots = ({ size = 24, color = '#000', className }) => {
    const dotStyle = {
        width: size / 4,
        height: size / 4,
        margin: size / 10,
        backgroundColor: color,
        borderRadius: '50%',
        display: 'inline-block',
        animation: 'bounce 1.4s infinite ease-in-out both'
    };
    return (_jsxs("div", { className: className, style: { display: 'flex', justifyContent: 'center' }, children: [_jsx("span", { style: { ...dotStyle, animationDelay: '0s' } }), _jsx("span", { style: { ...dotStyle, animationDelay: '0.2s' } }), _jsx("span", { style: { ...dotStyle, animationDelay: '0.4s' } })] }));
};
export default Dots;
