import React, { useState } from "react";

function Greetings({ name }) {
  const [greeting, setGreeting] = useState(true);

  function toggleGreeting() {
    setGreeting(!greeting);
  }

  return (
    <>
    <h1>{name}</h1>
    
      <div>
        {greeting ? 
        
          `Hello: ${name}` : 
          ` ${name}`
        }
      </div>
      <button onClick={toggleGreeting}>Toggle</button>
    </>
  );
}

export default Greetings;
