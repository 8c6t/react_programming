import React from 'react';
import { useDispatch } from 'react-redux';

const NumberSelect = ({ value, options, postfix, onChange: onChangeFromProps }) => {
  const dispatch = useDispatch();
  const onChange = (e) => {
    const value = Number(e.currentTarget.value);
    dispatch(onChangeFromProps(value));
  }

  return (
    <div>
      <select onChange={onChange} value={value}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {postfix}
    </div>
  );
}

export default NumberSelect;
