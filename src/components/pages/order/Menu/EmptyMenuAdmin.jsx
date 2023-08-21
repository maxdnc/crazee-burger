const EmptyMenuAdmin = ({ onClick }) => {
  return (
    <div>
      <span>Pas de Produit</span> <button onClick={onClick}>reset</button>
    </div>
  );
};
export default EmptyMenuAdmin;
