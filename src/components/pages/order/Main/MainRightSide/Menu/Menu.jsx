import { useContext } from "react";
import styled from "styled-components";

//utils
import { formatPrice } from "../../../../../../utils/maths.js";

import OrderContext from "../../../../../../context/OrderContext.js";
//helper
import { checkIfSameProductIsSelected } from "../../../../../../utils/array.js";
import { findInArrayById } from "../../../../../../utils/array";
//components
import Card from "../../../../../reusable-ui/Card.jsx";
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx";
import EmptyMenuClient from "./EmptyMenuClient.jsx";
import Loader from "../../../../../reusable-ui/Loader.jsx";

//enums
import {
  EMPTY_PRODUCT,
  IMAGE_BY_DEFAULT,
  IMAGE_SOLD_OUT,
} from "../../../../../../enums/product.js";

import { devices } from "../../../../../../enums/devices.js";
//animation
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Menu = () => {
  const {
    username,
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
    handleDeleteToMenu(idProductTodelete, username);
    handleDeleteToBasket(idProductTodelete, username);

    if (idProductTodelete === selectedProduct.id) {
      setSelectedProduct(EMPTY_PRODUCT);
    }
  };

  const handleClick = async (idSelectedProduct) => {
    handleProductSelected(idSelectedProduct);
  };

  const handleAdd = (event, idClickedProduct) => {
    event.stopPropagation();
    const productToAdd = findInArrayById(menuData, idClickedProduct);
    handleAddToBasket(productToAdd, username);
  };

  const [animationParent] = useAutoAnimate();

  if (menuData === undefined)
    return (
      <ContainerLoaderStyled>
        <Loader />
      </ContainerLoaderStyled>
    );

  if (menuData.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onClick={() => resetMenu(username)} />;
  }

  return (
    <MenuStyled ref={animationParent}>
      {menuData.map(({ imageSource, title, price, id, isAvailable }) => {
        return (
          <li key={id}>
            <Card
              isAvailable={isAvailable}
              imageSoldOut={isAvailable ? null : IMAGE_SOLD_OUT}
              imageSoldOutAlt="sold-out"
              className={"menu-card"}
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

  .animated-menu-card-appear,
  .animated-menu-card-enter {
    .menu-card {
      opacity: 0;
      transform: translateY(-10%);
    }
  }

  .animated-menu-card-appear-active,
  .animated-menu-card-enter-active {
    .menu-card {
      transform: translateY(0);
      opacity: 1;
      transition: all 0.3s ease-out;
    }
  }

  .animated-menu-card-exit {
    .menu-card {
      opacity: 1;
    }
  }

  .animated-menu-card-exit-active {
    .menu-card {
      opacity: 0;
      transition: all 0.15s ease-out;
    }
  }
`;

const ContainerLoaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100dvh - 108px);

  @media ${devices.lg} {
    min-height: calc(100dvh - 92px - 47px);
  }
  @media ${devices.md} {
    min-height: calc(100dvh - 76px - 47px);
  }
`;

export default Menu;
