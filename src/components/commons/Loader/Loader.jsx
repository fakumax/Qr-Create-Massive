import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { ContLoader } from './styles';

const Loader = () => {
  return (
    <ContLoader>
      <ThreeDots
        height="30"
        width="30"
        radius="9"
        color="#ffff"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </ContLoader>
  );
};

export default Loader;
