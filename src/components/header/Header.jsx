import Image from "next/image";
import Avatar from "@/public/avatar.png";
import styles from "./Header.module.scss";
import HeaderMenu from "./HeaderMenu";
import useMenu from "@/src/hooks/useMenu";
import AddSalary from "./modais/AddSalary";

const Header = () => {
  const [isVisible, toogleMenuHandler] = useMenu();

  return (
    <>
      <AddSalary />
      <section className={styles.header}>
        <div className={styles.message}>
          <h1>Bem vindo ao Smart Cash Control!</h1>
          <h2>Sua carteira está esperando por você!</h2>
        </div>
        <div className={styles.avatar}>
          <Image
            src={Avatar}
            alt="Avatar"
            layout="fill"
            onClick={toogleMenuHandler}
          />
          {isVisible && <HeaderMenu toogleMenuHandler={toogleMenuHandler} />}
        </div>
      </section>
    </>
  );
};

export default Header;
