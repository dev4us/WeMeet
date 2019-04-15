import React from "react";
import styled from "styled-components";
import { SphereSpinner } from "react-spinners-kit";

const Loading = ({ loading }) => {
  return (
    <Container>
      <SphereSpinner size={80} color="#3177eb" loading={loading} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 450px;
`;

export default Loading;
