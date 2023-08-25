import { useContext, useState } from "react";
import Card from "../../../reusable-ui/Card.jsx";
import styled from "styled-components";

//utils
import { formatPrice } from "../../../../utils/maths.js";

import OrderContext from "../../../../context/OrderContext.js";

import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx";
import EmptyMenuClient from "./EmptyMenuClient.jsx";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

const Menu = () => {
  const {
    menuData,
    isModeAdmin,
    handleDeleteToMenu,
    resetMenu,
    setSelectedProduct,
  } = useContext(OrderContext);

  const getInfoProduct = (idSelectedProduct) => {
    const selectedProduct = menuData.find(
      (product) => product.id === idSelectedProduct
    );
    setSelectedProduct(selectedProduct);

    if (menuData.length === 0) {
      if (!isModeAdmin) return <EmptyMenuClient />;

      return <EmptyMenuAdmin onClick={resetMenu} />;
    }
  };
  return (
    <MenuStyled>
      {menuData.map(({ imageSource, title, price, id }) => {
        return (
          <li key={id}>
            <Card
              image={imageSource ? imageSource : IMAGE_BY_DEFAULT}
              alt={title}
              title={title}
              leftDescription={formatPrice(price)}
              labelButton={"Add Item"}
              hasDeleteButton={isModeAdmin}
              onDelete={() => handleDeleteToMenu(id)}
              onClick={() => getInfoProduct(id)}
              isHoverable={isModeAdmin}
            />
          </li>
        );
      })}
    </MenuStyled>
  );
};

const MenuStyled = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 5.75rem;
  padding-right: 5.75rem;
  margin-block: 3rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 5rem;

  li {
    margin: 0 auto;
    position: relative;
  }
`;

export default Menu;
