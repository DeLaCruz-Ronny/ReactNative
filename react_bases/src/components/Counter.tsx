import { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState<number>(10)

    const increaseBy = ( value: number ) => {
        setCounter(counter + value)
    }

  return (
    <>
    <h3>Counter: <small>{ counter }</small></h3>
    <div>
        <button onClick={ () => increaseBy(+1) }>+1</button>
        &nbsp;&nbsp;
        <button onClick={ () => increaseBy(-1) }>-1</button>
    </div>
    </>
  )
}

export default Counter
