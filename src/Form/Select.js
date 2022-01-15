import React from 'react';

const Select = ({ options, value, setValue, ...props }) => {
  return (
    <select
      onChange={({ target }) => setValue(target.value)}
      value={value}
      {...props}
    >
      <option value="" disabled>
        Selecione
      </option>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
