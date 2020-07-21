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
	text-align: center;
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

export const CardsWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 150px 150px;
  grid-gap: 10px;
  margin: 20px 10px;
  border-top: 1px solid ${variables.colorLightestGray};
  padding-top: 40px;
  @media (min-width: ${variables.screenSm}) {
      grid-template-columns: 220px 220px;
  }
  @media (min-width: ${variables.screenMd}) {
      grid-template-columns: 250px 250px 250px;
  }
`
