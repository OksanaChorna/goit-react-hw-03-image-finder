import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <li className={style.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt="img"
        className={style.ImageGalleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;
