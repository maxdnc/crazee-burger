import { useContext } from "react";
import Card from "../../../../../reusable-ui/Card.jsx";
import styled from "styled-components";

//utils
import { formatPrice } from "../../../../../../utils/maths.js";

import OrderContext from "../../../../../../context/OrderContext.js";
//helper
import { checkIfSameProductIsSelected } from "../../../../../../utils/array.js";
import { findInArrayById } from "../../../../../../utils/array";
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
    titleEditRef,
    handleDeleteToBasket,
    handleAddToBasket,
    handleProductSelected,
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
    handleProductSelected(idSelectedProduct);
  };

  const handleAdd = (event, idClickedProduct) => {
    event.stopPropagation();
    const productToAdd = findInArrayById(menuData, idClickedProduct);
    handleAddToBasket(productToAdd);
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
              isSelected={checkIfSameProductIsSelected(id, selectedProduct.id)}
              onAdd={(event) => {
                handleAdd(event, id);
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
  padding-bottom: 3rem;
  margin: 0 auto;
  margin-block: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 5rem;
  min-height: calc(100dvh - 108px - 47px - 6rem);

  li {
    margin: 0 auto;
    position: relative;
  }
`;

export default Menu;
