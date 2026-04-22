import React from 'react'
import { useState } from 'react';

const FormHandling = () => {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value = {name}
        onChange={handleChange}
      />
      <h2><b>Hello {name}</b></h2>
    </div>
    </>
  );
}

export default FormHandling