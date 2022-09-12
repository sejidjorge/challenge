import { down } from "styled-breakpoints";
import styled from "styled-components";

export const NavBody = styled.div`
  width: 100%;
  padding: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.3125rem;
  background-color: ${({ theme }) => theme.colors.primary};

  ${down("md")} {
    padding: 20px;
    height: 3rem;
  }
`;

export const BoxLogo = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  P {
    font-family: "Montserrat bold";
    font-size: 40px;
    color: ${({ theme }) => theme.colors.text.light};
    ${down("md")} {
      font-size: 32px;
    }
    span {
      font-family: "Montserrat light";
      font-size: 20px;
      ${down("md")} {
        font-size: 16px;
      }
    }
  }
`;

export const CartButton = styled.button`
  width: 5.625rem;
  height: 2.8125rem;
  font-size: 1.125rem;
  font-family: "Montserrat bold";
  ${down("md")} {
    width: 3.5rem;
    height: 1.625rem;
    font-size: 0.75rem;
  }
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: all 0.5s 0s linear;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: 0.0625rem solid ${({ theme }) => theme.colors.white};
    transform: scale(0.98);
  }
`;
