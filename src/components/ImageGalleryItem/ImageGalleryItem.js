import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, onImgClick }) => {
  return (
    <li className={style.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt="img"
        className={style.ImageGalleryItemImage}
        onClick={onImgClick}
      />
    </li>
  );
};

export default ImageGalleryItem;
