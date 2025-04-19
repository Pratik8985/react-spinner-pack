import { jsx as _jsx } from "react/jsx-runtime";
import Dots from './spinners/Dots';
import Circle from './spinners/Circle';
const Spinner = ({ type = 'circle', ...props }) => {
    const components = {
        dots: Dots,
        circle: Circle,
    };
    const Selected = components[type] || Circle;
    return _jsx(Selected, { ...props });
};
export default Spinner;
