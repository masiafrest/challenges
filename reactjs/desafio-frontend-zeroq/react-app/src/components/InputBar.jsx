import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

export default function InputBar({ value, onChange }) {
  return (
    <BarContainer>
      <SearchContainer>
        <Icon>
          <BiSearchAlt />
        </Icon>
        <SearchInput
          placeholder="Buscar sucursal"
          type="text"
          onChange={onChange}
          value={value}
        />
      </SearchContainer>
    </BarContainer>
  );
}

const BarContainer = styled.div`
  background-color: var(--light-blue);
  width: 100%;
  margin: auto;
  /* padding: 0.2em 4em 0.4em; */
  padding: 0.3em 0;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 80%;
  height: 30px;
  margin: auto;
  padding-right: 50%;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const Icon = styled.div`
  position: relative;
  z-index: 1;
  color: black;
  padding-left: 5px;
  padding-top: 2px;
`;

const SearchInput = styled.input`
  position: absolute;
  width: 33%;
  height: 100%;
  padding-left: 24px;
  border: 1px solid var(--input-border-color);
`;
