import React from 'react';
import styled from 'styled-components';

const Checkbox = ({ check, setCheck }) => {
  const handleCheck = (e) => {
    console.log('wara');
    setCheck(!check);
  };
  return (
    <Container>
      <label className="custom-control-label" htmlFor="switchId">
        Multi QR creator
      </label>
      <input
        type="checkbox"
        className="custom-control-input"
        id="switchId"
        defaultChecked={check}
        //onClick={() => handleCheck(e)}
      />
    </Container>
  );
};

export default Checkbox;

const Container = styled.div`
  display: flex;
  flex-direction: 'row';
  align-items: center;
  padding: 0 20px;
  justify-content: space-around;
`;
