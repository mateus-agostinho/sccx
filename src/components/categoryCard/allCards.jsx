import CategoryCard from "./categoryCard";
import NoCard from "./noCard";
import styles from "./allCards.module.scss";
import AddAmount from "./modais/AddAmount";
import SubtractAmount from "./modais/SubtractAmount";
import TransferAmount from "./modais/TransferAmount";
import EditCategory from "./modais/EditCategory";
import AddCategory from "./modais/AddCategory";
import useGetDocs from "@/src/hooks/useGetDocs";
import { useSelector } from "react-redux";

const allCards = () => {
  const { categories } = useSelector((state) => state.app);

  console.log(categories);

  const cards = categories.map((category) => (
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
