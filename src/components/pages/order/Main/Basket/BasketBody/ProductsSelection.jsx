import styled from "styled-components";
import BasketCard from "./BasketCard/BasketCard";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
import { formatPrice } from "../../../../../../utils/maths";
import { checkIfProductIsSelected } from "../../../../../../utils/helper";
import { isProductSelected } from "../../../../../../utils/isProductSelected";
import { findInArray } from "../../../../../../utils/array";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";

const ProductsSelection = () => {
  const {
    basketProducts,
    handleDeleteToBasket,
    handleIncrementQuantityProduct,
    handleDecrementQuantityProduct,
    isModeAdmin,
    selectedProduct,
    setSelectedProduct,
    setIsCollapsed,
    setCurrentTabSelected,
    titleEditRef,
  } = useContext(OrderContext);

  const handleClick = async (idSelectedProduct) => {
    const isSelectedProductSame =
      isProductSelected(selectedProduct) &&
      selectedProduct.id === idSelectedProduct;

    if (isSelectedProductSame) {
      setSelectedProduct(EMPTY_PRODUCT);
    } else {
      const selectedProduct = findInArray(basketProducts, idSelectedProduct);

      await setIsCollapsed(false);
      await setSelectedProduct(selectedProduct);
      await setCurrentTabSelected("edit");
      titleEditRef.current.focus();
    }
  };

  const handleDelete = (event, idBasketProduct) => {
    event.stopPropagation();
    handleDeleteToBasket(idBasketProduct);
  };

  const handleIncrement = (event, idBasketProduct) => {
    event.stopPropagation();
    handleIncrementQuantityProduct(idBasketProduct);
  };

  const handleDecrement = (event, idBasketProduct) => {
    event.stopPropagation();
    handleDecrementQuantityProduct(idBasketProduct);
  };
  return (
    <ProductsSelectionStyled>
      {basketProducts.map(({ id, title, price, imageSource, quantity }) => {
        return (
          <li key={id}>
            <BasketCard
              isSelected={checkIfProductIsSelected(id, selectedProduct.id)}
              isHoverable={isModeAdmin}
              onClick={isModeAdmin ? () => handleClick(id) : null}
              title={title}
              price={formatPrice(price)}
              imageSource={imageSource}
              deleteProduct={(event) => handleDelete(event, id)}
              quantity={quantity}
              incrementQuantity={(event) => {
                handleIncrement(event, id);
              }}
              decrementQuantity={(event) => {
                handleDecrement(event, id);
              }}
            />
          </li>
        );
      })}
    </ProductsSelectionStyled>
  );
};

const ProductsSelectionStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
  padding: 1.25rem 1rem;
  list-style: none;
  margin-left: 0;
`;
export default ProductsSelection;
