import React from 'react'

const Ternary = () => {
    const isloggedin = false;


  return (
<>
    <div className='Tern'>Ternary</div>
    <div className='hell'>{isloggedin?"Dashboard Access Given":"Access Denied"}</div>
</>  )
}

export default Ternary