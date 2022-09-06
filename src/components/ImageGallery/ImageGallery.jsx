import { ImageGalleryStyle } from './ImageGalleryStyles';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ImageGalleryStyle className="gallery">
      {images.map(image => {
        return (
          <ImageGalleryItem
            images={image}
            key={image.id}
            openModal={openModal}
          ></ImageGalleryItem>
        );
      })}
    </ImageGalleryStyle>
  );
};
