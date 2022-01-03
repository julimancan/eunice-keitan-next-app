import styled from "@emotion/styled";
import React from "react";
import { useGlobalState } from "../state";

const StyledButton = styled.button`
  font-family: ${({font}) => font};
  opacity: 0.8;
  padding: 0.5rem 1rem;
  transition: 0.2s;
  &:hover {
    border: 2px solid #755b49;
    /* border-radius: 5px; */
    color: white;
    background: #755b49;
  }
`;

const Button = ({ text, children }) => {
  const [siteSettings] = useGlobalState("siteSettings");

  const { buttonFonts = "PrequelDemo" } = siteSettings;

  return <StyledButton font={buttonFonts}>{children}</StyledButton>;
};

export default Button;
