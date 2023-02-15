import { useState } from "react";
import ButtonCounter from "./button-counter";
import DisplayCounter from "./display-counter";

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleCalc = (step, direction) => {

        if(direction === '+') {
            setCount(count => count + step);
        }
        else {
            setCount(count => count - step);
        }
    }

    return (
        <>
            <DisplayCounter val={count} />

            <ButtonCounter onCalc={handleCalc} />
            <ButtonCounter onCalc={handleCalc} step={5} />
        </>
    )
}

export default Counter;