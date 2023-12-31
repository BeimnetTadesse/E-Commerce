import React from 'react'
import { useState } from 'react'
function Nina({func}) {
    
    const [counter, setCounter] = useState(0)
    
    const handleIncrease =() =>{
        setCounter(counter+1) 
}    
const handleDecrease =() =>{
    setCounter(counter-1) 
}    
const handleReset =() =>{
    setCounter(0) 
}    


    return (
    <div>
        <button onClick={handleIncrease} >
            Increases
        </button>
        <button onClick={handleDecrease} >
            Decrease
        </button>
        <button onClick={handleReset} >
            reset

        </button>
        <span> {counter}</span>
    </div>
  )
}

export default Nina