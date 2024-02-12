import React, { useRef, useEffect } from 'react';
import styles from "./inputWithLabel.module.css";
import PropTypes from "prop-types";

const InputWithLabel = (props) => {
    const inputRef = useRef(); // Create a ref named inputRef
    useEffect(() => { // Define a useEffect without a dependency list
        inputRef.current.focus(); // Inside the side-effect handler function, call the focus() method on the current inputRef
    }, []);
  
    return (
    <>
      <label htmlFor={props.htmlFor} className={styles.label}>{props.children}</label> 
      <input
        ref={inputRef} // Add a ref prop with value inputRef on the input element
        id={props.htmlFor}
        type="text"
        name={props.inputName}
        value={props.inputValue}
        onChange={props.onChange}
        className={styles.input}
       />
    </>
  );
};

InputWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isFocused: PropTypes.bool,
};

export default InputWithLabel;