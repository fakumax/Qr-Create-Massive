import React from 'react';
import styled from 'styled-components';

const Checkbox = () => {
  return (
    <Container>
      <label className='custom-control-label' htmlFor='switchId'>
        Multi QR creator
      </label>
      <input
        type='checkbox'
        className='custom-control-input'
        // id='switchId'
        // checked={this.state.enableSwitch}
        // onClick={this.handleSwitch}
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
