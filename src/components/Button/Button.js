import styles from './Button.module.css';

const Button = () => {
  return (
    <button
      className={styles.Button}
      type="button"
      //   onClick={() => onDeleteContact(id)}
    >
      Load more
    </button>
  );
};

export default Button;
