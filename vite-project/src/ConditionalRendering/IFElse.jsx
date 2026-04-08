import React from 'react'

const IFElse = () => {
    let msg;
    const age = 20;
    if(age>18){
        msg = 'ELigible to Vote'
    }
    else{
        msg ='Not Eligible to Vote'}

  return (
    <div className="container">
      <div className="title">IF Else Check</div>
      <h2 className="message">{msg}</h2>
    </div>
  )
}

export default IFElse