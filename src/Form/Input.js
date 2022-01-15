import React from 'react';

const Input = ({
  label,
  id,
  value,
  onChange,
  type,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <>
      <input
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
        value={value}
      />
      <label htmlFor={id}>{label}</label>
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
