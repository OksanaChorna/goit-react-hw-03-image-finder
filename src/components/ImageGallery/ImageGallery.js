import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ showGallery }) => {
  return (
    <ul className="ImageGallery">
      {showGallery.map(({ id, webformatURL, largeImageURL }) => {
        console.log(webformatURL);
        return <ImageGalleryItem key={id} webformatURL={webformatURL} />;
      })}
    </ul>
  );
};

export default ImageGallery;
