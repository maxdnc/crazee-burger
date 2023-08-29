import { useContext, useState } from "react";
import Card from "../../../../../reusable-ui/Card.jsx";
import styled from "styled-components";

//utils
import { formatPrice } from "../../../../../../utils/maths.js";

import OrderContext from "../../../../../../context/OrderContext.js";
//helper
import { checkIfProductIsSelected } from "./helper.js";
import { isProductSelected } from "../../../../../../utils/isProductSelected.js";
import { findInArray } from "../../../../../../utils/array";
//components
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx";
import EmptyMenuClient from "./EmptyMenuClient.jsx";

//enums
import { EMPTY_PRODUCT } from "../../../../../../enums/product.js";
import { deepCopy } from "../../../../../../utils/array.js";

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
    basketProducts,
    setBasketProducts,
    handleDeleteToBasket,
  } = useContext(OrderContext);

  const handleCardDelete = (event, idProductTodelete) => {
    event.stopPropagation();
    handleDeleteToMenu(idProductTodelete);
    handleDeleteToBasket(idProductTodelete);

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
      const selectedProduct = findInArray(menuData, idSelectedProduct);

      await setIsCollapsed(false);
      await setSelectedProduct(selectedProduct);
      await setCurrentTabSelected("edit");
      titleEditRef.current.focus();
    }
  };

  const handleAddButton = (event, idClickedProduct) => {
    const basketProductsCopy = deepCopy(basketProducts);

    const productToAdd = findInArray(menuData, idClickedProduct);
    const isProductAlreadyInBasket = findInArray(
      basketProductsCopy,
      productToAdd.id
    );

    if (isProductAlreadyInBasket) {
      const productIndex = basketProductsCopy.findIndex(
        (product) => product.id === productToAdd.id
      );

      basketProductsCopy[productIndex].quantity += 1;
      console.log(basketProductsCopy[productIndex].quantity);
      setBasketProducts(basketProductsCopy);
    } else {
      const newBasketProduct = { ...productToAdd, quantity: 1 };
      const basketProductUpdated = [newBasketProduct, ...basketProductsCopy];
      setBasketProducts(basketProductUpdated);
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
              onClick={isModeAdmin ? () => handleClick(id) : null}
              isHoverable={isModeAdmin}
              isSelected={checkIfProductIsSelected(id, selectedProduct.id)}
              onAdd={(event) => {
                handleAddButton(event, id);
              }}
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
