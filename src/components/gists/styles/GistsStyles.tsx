import styled from 'styled-components';
import { variables } from "../../../styles/variables";

export const CardsWrapper = styled.div`
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 4px 6px -1px rgba(${variables.colorDarkGray}, 0.1), 0 2px 4px -1px rgba(${variables.colorDarkGray}, 0.06);
`

export const CardInfo = styled.div`
  max-width: 160px;
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

  .search {
    position: relative;
    left: auto;
    top: auto;
    transition: all 0.3s ease-in;
    padding: 15px;
  }

  &.pinned {
    @media (min-width: ${variables.screenMd}) {
      width: 770px;
      margin: auto;
    }
  }

  &.centered {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    background: $color-white;
    .search {
      position: absolute;
      top: 50%;
      transform: translateY(-100%);
      -webkit-transform: translateY(-100%);
    }
  }
`;
