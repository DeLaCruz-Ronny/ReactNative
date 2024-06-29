import UseCounter from "../hooks/UseCounter"


const CounterWithHooks = () => {

  const { counter, increaseBy } = UseCounter({initialValue: 5})
  
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

export default CounterWithHooks
