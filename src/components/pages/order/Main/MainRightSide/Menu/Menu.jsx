import { useContext, useState } from "react";
import Card from "../../../../../reusable-ui/Card.jsx";
import styled from "styled-components";

//utils
import { formatPrice } from "../../../../../../utils/maths.js";

import OrderContext from "../../../../../../context/OrderContext.js";
//helper
import { checkIfProductIsSelected } from "./helper.js";
import { isProductSelected } from "../../../../../../utils/isProductSelected.js";
//components
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx";
import EmptyMenuClient from "./EmptyMenuClient.jsx";

//enums
import { EMPTY_PRODUCT } from "../../../../../../enums/product.js";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

const Menu = () => {
  const {
    menuData,
    isModeAdmin,
    handleDeleteToMenu,
    resetMenu,
    selectedProduct,
    setSelectedProduct,
    setIsCollapsed,
    setCurrentTabSelected,
    titleEditRef,
  } = useContext(OrderContext);

  const handleCardDelete = (event, idProductTodelete) => {
    event.stopPropagation();
    handleDeleteToMenu(idProductTodelete);
    if (idProductTodelete === selectedProduct.id) {
      setSelectedProduct(EMPTY_PRODUCT);
      titleEditRef.current.focus();
    }
  };

  const handleClick = async (idSelectedProduct) => {
    const isSelectedProductSame =
      isProductSelected(selectedProduct) &&
      selectedProduct.id === idSelectedProduct;

    if (isSelectedProductSame) {
      setSelectedProduct(EMPTY_PRODUCT);
    } else {
      const selectedProduct = menuData.find(
        (product) => product.id === idSelectedProduct
      );

      await setIsCollapsed(false);
      await setSelectedProduct(selectedProduct);
      await setCurrentTabSelected("edit");
      titleEditRef.current.focus();
    }
  };

  if (menuData.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />;

    return <EmptyMenuAdmin onClick={resetMenu} />;
  }
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
              onDelete={(event) => handleCardDelete(event, id)}
              onClick={isModeAdmin ? () => handleClick(id) : undefined}
              isHoverable={isModeAdmin}
              isSelected={checkIfProductIsSelected(id, selectedProduct.id)}
            />
          </li>
        );
      })}
    </MenuStyled>
  );
};

const MenuStyled = styled.ul`
  list-style: none;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  margin: 0 auto;
  margin-block: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 5rem;
  min-height: calc(100vh - 108px - 47px - 6rem);

  li {
    margin: 0 auto;
    position: relative;
  }
`;

export default Menu;
