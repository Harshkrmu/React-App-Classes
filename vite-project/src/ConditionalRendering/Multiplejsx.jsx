import React from 'react'

const Multiplejsx = () => {
    const isStudent  = true;

  return (
    <>
    <div className='Tern'>MULTIPLE - JSX</div>
    <div className='hell'>
        {isStudent?
            (<div>
            <h1>Student Dashboard</h1>
            <p>Welcome to the courses</p>
            </div>)
            :(<div>
            <h1>Guest Dashboard</h1>
            <p>Please Enroll in the courses</p>
            </div>)
        }</div>
    </>
  )
}

export default Multiplejsx