import CategoryCard from "./categoryCard";
import NoCard from "./noCard";
import styles from "./allCards.module.scss";
import Modal from "../Ui/Modal";
import AddAmount from "./modais/AddAmount";
import SubtractAmount from "./modais/SubtractAmount";
import TransferAmount from "./modais/TransferAmount";
import EditCategory from "./modais/EditCategory";
import AddCategory from "./modais/AddCategory";

const DUMMY_DATA = [
  { id: 1, title: "essencial", amount: 1800, percentage: 10 },
  { id: 2, title: "investimento", amount: 1400, percentage: 10 },
  { id: 3, title: "pessoal", amount: 1465, percentage: 10 },
];

const allCards = () => {
  const cards = DUMMY_DATA.map((category) => (
    <CategoryCard key={category.id} data={category} />
  ));

  return (
    <>
      <AddAmount />
      <SubtractAmount />
      <TransferAmount />
      <EditCategory />
      <AddCategory />
      <section className={styles.section}>
        {cards}
        <NoCard />
      </section>
    </>
  );
};

export default allCards;
