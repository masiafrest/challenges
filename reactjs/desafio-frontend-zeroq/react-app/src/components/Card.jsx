import { useState } from "react";

import styled from "styled-components";
import { BsClock, BsPeople } from "react-icons/bs";

export default function Card({ name, online, waiting, elapsed }) {
  const [isOnline, setIsOnline] = useState(online);
  return (
    <CardContainer
      onClick={() => {
        setIsOnline(!isOnline);
      }}
    >
      <CardBody online={isOnline}>
        <h2>{name}</h2>
      </CardBody>
      <CardFooter online={isOnline}>
        <CardFooterIcon>
          <BsPeople title="waiting" /> <span>{waiting}</span>
        </CardFooterIcon>
        <CardFooterIcon>
          <BsClock title="time elapsed" /> <span>{elapsed}</span>
        </CardFooterIcon>
      </CardFooter>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  height: 175px;
  display: flex;
  flex-direction: column;
`;

const CardBody = styled.div`
  background-color: ${(props) =>
    props.online ? "var(--light-blue)" : "var(--light-grey)"};
  color: ${(props) => (props.online ? "white" : "var(--dark-grey)")};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const CardFooter = styled.footer`
  background-color: ${(props) =>
    props.online ? "var(--green)" : "var(--dark-grey)"};
  display: flex;
  justify-content: start;
  gap: 2em;
  padding: 0.5em 3em;
`;

const CardFooterIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  font-weight: 500;
  & > span {
    /* padding-bottom: 0.1em; */
  }
`;
