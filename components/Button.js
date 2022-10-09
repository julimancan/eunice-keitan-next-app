import styled from "@emotion/styled";
import React from "react";
import { useGlobalState } from "../state";

const StyledButton = styled.button`
  font-family: ${({font}) => font};
  /* opacity: 0.2; */
  padding: .5rem 1rem .4rem;
  transition: 0.2s;
  display: grid;
  place-content: center;
  background-color: transparent;
  border: 2px solid #f7e6c9;
  width: fit-content;
  cursor: pointer;
  &:hover {
    border: 2px solid #755b49;
    background: #755b49;
  }
`;

const Button = ({ text, children }) => {
  const [siteSettings] = useGlobalState("siteSettings");

  const { buttonFonts = "PrequelDemo" } = siteSettings;

  return <StyledButton font={buttonFonts}>{children}</StyledButton>;
};

export default Button;
