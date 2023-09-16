import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  align-item: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
