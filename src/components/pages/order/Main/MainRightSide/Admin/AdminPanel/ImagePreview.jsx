import styled from "styled-components";
import { theme } from "../../../../../../../theme";

const ImagePreview = ({ imageSource, title }) => {
  return (
    <ImagePreviewStyled>
      {imageSource ? (
        <img src={imageSource} alt={title} />
      ) : (
        <div className="empty-image">
          <p>No image</p>
        </div>
      )}
    </ImagePreviewStyled>
  );
};

const ImagePreviewStyled = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    object-position: center center;
  }
  .empty-image {
    border: 1px solid ${theme.colors.greyLight};
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;
export default ImagePreview;
