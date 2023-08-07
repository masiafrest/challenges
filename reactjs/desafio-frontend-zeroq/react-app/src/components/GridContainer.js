import styled from "styled-components";

const GridContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
  gap: 20px;
`;

export default GridContainer;
