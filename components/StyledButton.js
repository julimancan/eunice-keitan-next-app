import styled from "@emotion/styled";

export const StyledButton = styled.button`
  color: ${({ colors, siteSettings, inHome }) =>
    (inHome && siteSettings.menuTextColor) || colors.menuBarColor};
  border: ${({ colors, siteSettings, inHome }) =>
    `1px solid ${
      (inHome && siteSettings.menuTextColor) || colors.menuBarColor
    }`};
  font-family: "PrequelDemo";

  background: rgba(0, 0, 0, 0.1);
  padding: 0.2rem 0.8rem;
  /* background: red; */
  transition: all 0.2s ease-in-out;
  &:hover {
    border: 1px solid #755b49;
    color: white;
    background: #755b49;
    cursor: pointer;
  }
`;
