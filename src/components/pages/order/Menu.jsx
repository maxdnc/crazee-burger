import { useState } from "react";
import Card from "./Card";
import styled from "styled-components";

//data
import { fakeMenu2 } from "../../../fakeData/fakeMenu";

//utils

import { formatPrice } from "../../../utils/maths";

const Menu = () => {
  const [menuData, setMenuData] = useState(fakeMenu2);
  console.log(menuData);

  return (
    <MenuStyled>
      {menuData.map((product) => {
        return (
          <li key={product.id}>
            <Card
              image={product.imageSource}
              title={product.title}
              price={formatPrice(product.price)}
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
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 5rem;

  li {
    margin: 0 auto;
  }
`;

export default Menu;
