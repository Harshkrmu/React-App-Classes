import React from 'react'

const Child = ({name}) => {
  return (
    <>
      <div className="child">Child</div>
      <h1>Rendered in Child comp: {name}</h1>
    </>
  )
}

export default Child