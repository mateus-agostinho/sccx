import Header from "@/src/components/header/header";
import AllCards from "@/src/components/categoryCard/allCards";
import styles from "@/styles/initial.module.scss";
import { useDispatch } from "react-redux";
import { setCategories } from "@/src/store/app-slice";
import useGetDocs from "@/src/hooks/useGetDocs";

export default function Home() {
  const dispatch = useDispatch();
  
  dispatch(setCategories(useGetDocs('categoria')));


  return (
    <main className={styles.main}>
      <Header></Header>
      <AllCards></AllCards>
    </main>
  )
}
