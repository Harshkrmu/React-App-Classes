import React, {useState} from 'react'

const UseStateOne = () => {

    const [count,setCount]=useState(0);

    console.log(count) //0
    function increase(){
        console.log("inside function")
        setCount(count+1) //it will update the count value in the count state
    }

    function decrease(){
        console.log("inside function")
        if(count>0){
        setCount(count-1) //it will update the count value in the count state
        }
    }

  return (  
    <>
    <div className='hell'>UseStateOne</div>
     <div className='hell'>Count: {count}</div>
    <button className='hell' onClick={increase}>----Click----</button>
    <button className='hell' onClick={decrease}>----DeClick----</button>
    </>
  )
}

export default UseStateOne  