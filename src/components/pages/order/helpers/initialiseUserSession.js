import { getMenu } from "../../../../api/product";
import { getLocalStorage } from "../../../../utils/window";

const intialiseMenu = async (username, setMenuData) => {
  const menuReceived = await getMenu(username);
  setMenuData(menuReceived);
};
const intialiseBasket = (username, setBasketProducts) => {
  const basketReceived = getLocalStorage(username);
  basketReceived && setBasketProducts(basketReceived);
};

export const initialiseUserSession = async (
  username,
  setMenuData,
  setBasketProducts
) => {
  await intialiseMenu(username, setMenuData);
  intialiseBasket(username, setBasketProducts);
};
