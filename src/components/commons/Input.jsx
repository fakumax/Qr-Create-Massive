import React from 'react';
import styled from 'styled-components';

const Input = ({ type, name, Onchange, text, options, setOptions }) => {
  const onDataChange = (event) => {
    setOptions((options) => ({
      ...options,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <Container>
      <label htmlFor={name}>{text}</label>
      <InputStyle type={type} id={name} name={name} onChange={onDataChange} />
    </Container>
  );
};

export default Input;

const Container = styled.div`
  padding: 10px;
  justify-content: space-between;
  display: flex;
`;

const InputStyle = styled.input`
  border-radius: '50%';
`;
