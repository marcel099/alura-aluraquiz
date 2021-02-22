import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;

`;

export default function Input({
  onChange, placeholder, type, name, value, autoComplete,
}) {
  return (
    <div>
      <InputBase
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        autoComplete={autoComplete}
      />
    </div>
  );
}

Input.defaultProps = {
  value: '',
  autoComplete: 'off',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  autoComplete: PropTypes.string,
};
