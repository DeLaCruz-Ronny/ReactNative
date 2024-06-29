import { useState } from "react";

interface Options {
    initialValue: number
}

const UseCounter = ({ initialValue = 0 }: Options) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const increaseBy = (value: number) => {
    const newValue = counter + value
    if (newValue > 0){

        setCounter(counter + value);
    }
  };

  return {
    counter,
    increaseBy,
  };
};

export default UseCounter;
