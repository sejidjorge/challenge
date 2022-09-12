import { down } from "styled-breakpoints";
import styled from "styled-components";

export const BodyPage = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContainerContent = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;
  padding-bottom: 4rem;
  display: flex;
  justify-content: center;
`;

export const GridProducts = styled.div`
  display: grid;
  transition: all 0.5s 0s linear;
  grid-template-columns: repeat(4, 1fr);
  ${down("md")} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${down("sm")} {
    grid-template-columns: repeat(1, 1fr);
  }
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`;

export const FooterPage = styled.footer`
  width: 100%;
  height: 2.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.gray.light};
  bottom: 0;
  P {
    font-family: "Montserrat";
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.text.dark};
  }
`;
