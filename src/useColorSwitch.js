import { useState } from "react";
 

function useColorSwitch() {
    const [color, setColor] = useState("#ff0000");

    const handleButtonClick = () => {
        setColor("#00ff00");
    };
    
    return [color,handleButtonClick];
}

    export default useColorSwitch;