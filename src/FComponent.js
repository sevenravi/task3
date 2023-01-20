import React from 'react'
import { useContext } from 'react';
import { Context } from './Context';

export default function FComponent({counter}) {

  const value = useContext(Context)
  return (
    <div className='border'>
      <h1>Function Component</h1>
      <h2>{value}</h2>
      
      <hr></hr>
      <Fchild/>      
    </div>
  );
}

const Fchild =()=>{
  const value = useContext(Context)
    return(
        <div className="border">
            <h1>Function Child Component</h1>
            <h2>{value}...</h2>
        </div>
    )
}
