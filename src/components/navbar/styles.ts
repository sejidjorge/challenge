import { down } from "styled-breakpoints";
import styled from "styled-components";

export const NavBody = styled.div`
  width: 100%;
  height: 6.3125rem;
  background-color: ${({ theme }) => theme.colors.primary};

  ${down("md")} {
    height: 3rem;
  }
`;
