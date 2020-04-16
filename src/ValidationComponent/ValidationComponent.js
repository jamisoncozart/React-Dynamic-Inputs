import React from 'react';

const ValidationComponent = props => {
  
  const textTooShort = (props.inputLength < 5); 
  
  return (
    textTooShort ? (
      <p>Text too short</p>
    ) : (
      <p>Text long enough</p>
    )
  )
}

export default ValidationComponent;