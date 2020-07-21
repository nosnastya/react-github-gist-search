import styled from 'styled-components';
import { variables } from "../../../styles/variables";

export const CardsWrapper = styled.div`
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 4px 6px -1px rgba(36, 41, 46, 0.1), 0 2px 4px -1px rgba(36, 41, 46, 0.06);
`

export const CardInfo = styled.div`
  max-width: 275px;
`

export const SearchInput = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${variables.colorLightGray};
  font-size: 14px;
  @media (min-width: ${variables.screenMd}) {
    width: 300px;
    padding: 10px 20px;
  }
`

export const NavWrapper = styled.div`
  display: flex;
  margin: auto;
  display: flex;
  justify-content: center;
  position: relative;
  background: white;

  .search {
    position: relative;
    left: auto;
    top: auto;
    transition: all 0.3s ease-in;
    padding: 15px;
  }

  @media (min-width: ${variables.screenMd}) {
    width: 770px;
  }

`;

export const RecentSearchWrapper = styled.div`
  margin: 30px 0;
  p {
    margin-bottom: 15px;
  }
`

export const GistsWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 150px 150px;
  grid-gap: 10px;
  margin: 20px 10px;
  border-top: 1px solid ${variables.colorLightestGray};
  padding-top: 40px;
  @media (min-width: ${variables.screenSm}) {
      grid-template-columns: 440px;
  }
  @media (min-width: ${variables.screenMd}) {
      grid-template-columns: 375px 375px;
  }
`
