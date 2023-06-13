import Header from "@/src/components/header/header";
import AllCards from "@/src/components/categoryCard/allCards";
import styles from "@/styles/initial.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <AllCards></AllCards>
    </main>
  )
}
