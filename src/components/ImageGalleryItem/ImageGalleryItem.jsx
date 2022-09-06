import { ImageGalleryItemStyle } from './ImageGalleryItemStyle';

export const ImageGalleryItem = ({ images, openModal }) => {
  const { webformatURL, tags, largeImageURL } = images;
  return (
    <>
      <ImageGalleryItemStyle className="gallery-item">
        <img
          src={webformatURL}
          alt={tags}
          onClick={() => openModal(largeImageURL)}
        />
      </ImageGalleryItemStyle>
    </>
  );
};
