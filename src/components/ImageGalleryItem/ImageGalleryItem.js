import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ props }) => {
  return (
    <li className={style.ImageGalleryItem}>
      <img src="#" alt="img" className={style.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
