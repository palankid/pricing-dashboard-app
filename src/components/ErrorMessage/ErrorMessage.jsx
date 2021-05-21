import { Alert } from "antd";
import styled from "styled-components";

const AlertStyled = styled(Alert)`
  margin: 100px 200px;
`;

const ErrorMessage = () => {
  return (
    <AlertStyled
      message="Network Error"
      description="Whoops, something went wrong on our servers!"
      type="error"
      showIcon
    />
  );
};

export default ErrorMessage;
