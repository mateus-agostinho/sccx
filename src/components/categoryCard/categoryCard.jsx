import useGetCurrency from "@/src/hooks/useGetCurrency";
import styles from "./categoryCard.module.scss";
import { TbPencil } from "react-icons/tb";
import CategoryMenu from "./categoryMenu";

const categoryCard = ({ data }) => {
  const { title, amount, percentage } = data;

  const formatedAmount = useGetCurrency(amount);

  return (
    <div className={styles.card}>
      <div className={styles.edit}>
        <TbPencil />
        <CategoryMenu/>
      </div>
      <h2>{title}</h2>
      <h3>{formatedAmount}</h3>
      <h4>Alocado:{percentage}%</h4>
    </div>
  );
};

export default categoryCard;
