import React from "react";
import styled from "styled-components";

type Props = {
  errorText: string;
}

export const ErrorMessage: React.FC<Props> = ({ errorText }) => {
  const Message = styled.div`
    color: palevioletred;
    border: 1px solid palevioletred;
    border-radius: 5px;
    background-color: #f5eef1;
    flex: 1;
    margin: 20px;
    padding: 20px;
  `;

  return (
    <div className="mar-ver--20 mar-lft--10 disp-flex flex-align--center">
      <Message>{errorText}</Message>
    </div>
  );
};
