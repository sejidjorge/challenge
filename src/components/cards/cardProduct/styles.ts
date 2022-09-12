import { down } from "styled-breakpoints";
import styled from "styled-components";

export const CardBody = styled.div`
  width: 217.56px;
  height: 285px;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.5s 0s linear;
  box-shadow: 0.25rem 0.25rem 0.625rem 0rem
    ${({ theme }) => theme.colors.gray.light};
  ${down("md")} {
    width: 250.5px;
    height: 328px;
  }
`;

export const ContentCard = styled.div`
  width: 100%;
  height: calc(100% - 31.91px);
  padding: 0.875rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all 0.5s 0s linear;
  ${down("md")} {
    height: calc(100% - 36.74px);
  }
`;

export const ProductImage = styled.img`
  width: auto;
  height: 139px;
  transition: all 0.5s 0s linear;
  ${down("md")} {
    height: 158.82px;
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const ProductName = styled.h6`
  font-family: "Montserrat";
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.dark};
`;

export const ProductPrice = styled.div`
  width: fit-content;
  height: 26px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray.dark};
  border-radius: 0.3125rem;
  p {
    white-space: nowrap;
    font-family: "Montserrat bold";
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

export const ProductDescription = styled.div`
  width: 100%;
  p {
    font-family: "Montserrat light";
    font-size: 10px;
    color: ${({ theme }) => theme.colors.text.dark};
  }
`;

export const CardButton = styled.button`
  width: 100%;
  height: 31.9104px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.light};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat bold";
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  transition: all 0.5s 0s linear;
  cursor: pointer;
  ${down("md")} {
    height: 36.74px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
