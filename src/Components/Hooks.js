import React, { useState, useEffect } from 'react';

const Hooks = () => {
  const [result, setResult] = useState(0);


  const plusDeux = () => setResult(result + 2);

  //ComponentDidMount
  useEffect(() => {
    setResult(7)

    //ComponentWillUnmount
    return () => console.log('Unmount');
  }, []);

  //ComponentDidUpdate
  useEffect(() => {
    console.log('Update');
  }, [result]);



  return (
    <>
      <h1>Le résultat est : {result}</h1>
      <button onClick={plusDeux}>+2</button>
    </>
  )
}

export default Hooks;