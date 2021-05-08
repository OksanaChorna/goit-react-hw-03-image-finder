import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ showGallery, onImgClick }) => {
  return (
    <ul className="ImageGallery">
      {showGallery.map(({ id, webformatURL, largeImageURL }) => {
        const handleItemClick = () => onImgClick(largeImageURL);
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            onImgClick={handleItemClick}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
