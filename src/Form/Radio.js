import React from 'react';

const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <>
      {options.map((option) => {
        return (
          <label key={option}>
            <input
              value={option}
              type="radio"
              checked={value === option}
              onChange={({ target }) => setValue(target.value)}
              {...props}
            />
            {option}
          </label>
        );
      })}
    </>
  );
};

export default Radio;
