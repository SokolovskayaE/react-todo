import React, { useRef, useEffect } from 'react';

const InputWithLabel = (props) => {
    const inputRef = useRef(); // Create a ref named inputRef
    useEffect(() => { // Define a useEffect without a dependency list
        inputRef.current.focus(); // Inside the side-effect handler function, call the focus() method on the current inputRef
    }, []);
 
 
    return (
    <>
      <label htmlFor={props.htmlFor}>{props.children}</label> 
      <input
        ref={inputRef} // Add a ref prop with value inputRef on the input element
        id={props.htmlFor}
        type="text"
        name={props.inputName}
        value={props.inputValue}
        onChange={props.onChange}
       />
    </>
  );
};

export default InputWithLabel;