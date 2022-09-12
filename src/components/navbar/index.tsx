import { mdiCartVariant } from "@mdi/js";
import Icon from "@mdi/react";
import { BoxLogo, CartButton, NavBody } from "./styles";

const Navbar = () => {
  return (
    <NavBody>
      <BoxLogo>
        <p>
          MKS<span>sistemas</span>
        </p>
      </BoxLogo>
      <CartButton>
        <Icon path={mdiCartVariant} size={0.8} />
        8
      </CartButton>
    </NavBody>
  );
};

export default Navbar;
