import styled, { keyframes } from 'styled-components';
import { variables } from "../../../styles/variables";

const loadingKeyframes = keyframes`
  from {
    background-position: -200px 0;
  }
  to  {
    background-position: calc(200px + 100%) 0;
  }
`

export const LayoutWrapper = styled.div`
	margin: 0 auto;
`

export const Placeholder = styled.div`
  background-color: ${variables.colorLightestGray};
  background-image: linear-gradient(
      90deg,
      ${variables.colorLightestGray},
      ${variables.colorWhite},
      ${variables.colorLightestGray}
  );
  background-size: 250px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  display: inline-block;
  line-height: 1;
  width: 100%;
  height: 150px;
  animation: ${loadingKeyframes} 1.2s infinite;
`

export const Tag = styled.span`
  display: inline-block;
  padding: 6px 12px;
  white-space: nowrap;
  background-color: ${variables.colorLightestBlue};
  color: white;
  border-radius: 3px;

  &:not(:first-child) {
    margin-left: 5px;
  }
`
