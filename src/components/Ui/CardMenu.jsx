import styles from "./CardMenu.module.scss";

const CardMenu = ({ children }) => {
  return (
    <div className={styles.card}>
      <div>
        <ul className={styles.list}>{children}</ul>
      </div>
    </div>
  );
};

export default CardMenu;
