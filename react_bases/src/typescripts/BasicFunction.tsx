

const BasicFunction = () => {

    const addToNumbers = (a:number,b:number): number =>{
        return a+b
    }

  return (
    <>
        <h3>Funciones</h3>
        <span>El resultado de sumar: { addToNumbers(8,2) }</span>
    </>
  )
}

export default BasicFunction
