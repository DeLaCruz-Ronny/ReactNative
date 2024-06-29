

//import React from 'react'

const BasicTypes = () => {

    const name:string = 'Ronny'
    const age:number = 28
    const powers: string[] = ['JavaScripts','PHP','C#']
    const isActive:boolean = true

  return (
    <>
        <h3>Tipos de Datos</h3>

        { name } { age } { isActive ? 'True':'False' }
        <br />
        { powers.join(', ') }
    </>
  )
}

export default BasicTypes
