import { Spin } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 200px;
`;

const LoadingLogo = () => {
  return (
    <Wrapper>
      <Spin tip="Loading..." size="large"></Spin>
    </Wrapper>
  );
};

export default LoadingLogo;
