import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ showGalarry }) => {
  return (
    <ul className="ImageGallery">
      {showGalarry.map(({ id, webformatURL, largeImageURL }) => {
        return <ImageGalleryItem key={id} webformatURL={webformatURL} />;
      })}
    </ul>
  );
};

export default ImageGallery;
