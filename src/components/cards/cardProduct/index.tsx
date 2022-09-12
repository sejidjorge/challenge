import { mdiShoppingOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { ProductProps } from "../../../types/productsTypes";
import {
  CardBody,
  CardButton,
  ContentCard,
  ProductDescription,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
} from "./styles";

const CardProduct = ({
  id,
  name,
  brand,
  description,
  photo,
  price,
}: ProductProps) => {
  return (
    <CardBody>
      <ContentCard>
        <ProductImage src={photo} />
        <ProductInfo>
          <ProductName>{name}</ProductName>
          <ProductPrice>
            <p>R$: {Math.trunc(price)}</p>
          </ProductPrice>
        </ProductInfo>
        <ProductDescription>
          <p>{description}</p>
        </ProductDescription>
      </ContentCard>
      <CardButton>
        <Icon path={mdiShoppingOutline} size={0.8} />
        COMPRAR
      </CardButton>
    </CardBody>
  );
};

export default CardProduct;
