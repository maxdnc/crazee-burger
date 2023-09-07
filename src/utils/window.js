export const refreshPage = () => window.location.reload();

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
