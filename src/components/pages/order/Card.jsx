import styled from "styled-components";

const Card = () => {
  return (
    <CardStyled>
      card
      <div className="container-image">
        container image
        <div className="image">image</div>
      </div>
      <div className="title">title</div>
      <div className="container-price-add">
        <div className="price">price</div>
        <div className="add-button">Add</div>
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: tomato;
  max-width: 240px;
  max-height: 330px;
  height: 100%;
  padding: 1.25rem;
  .container-image {
    background: red;
    width: 200px;
    height: 145px;
    overflow: hidden;

    .image {
      background: green;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .title {
    background: blueviolet;
  }
  .container-price-add {
    display: flex;
    justify-content: space-between;
    background: yellowgreen;

    .price {
      background: orange;
      width: 100%;
    }
    .add-button {
      background: yellow;
      width: 100%;
    }
  }
`;
export default Card;
