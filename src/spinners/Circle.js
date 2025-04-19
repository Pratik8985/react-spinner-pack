import { jsx as _jsx } from "react/jsx-runtime";
const Circle = ({ size = 40, color = '#000', className }) => {
    const style = {
        border: `${size / 10}px solid #eee`,
        borderTop: `${size / 10}px solid ${color}`,
        borderRadius: '50%',
        width: size,
        height: size,
        animation: 'spin 1s linear infinite'
    };
    return _jsx("div", { className: className, style: style });
};
export default Circle;
