import { useContext, useState } from "react";
import Card from "../../reusable-ui/Card.jsx";
import styled from "styled-components";

//utils

import { formatPrice } from "../../../utils/maths";
import OrderContext from "../../../context/OrderContext.js";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

const Menu = () => {
  const { menuData, isModeAdmin, handleDeleteToMenu } =
    useContext(OrderContext);

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
