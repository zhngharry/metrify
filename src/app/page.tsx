import MainTitle from "../components/mainTitle/mainTitle";
import styles from "./homepage.module.css";
import MainPageShowcase from "../components/mainPageShowcase/mainPageShowcase";

export default function Home() {
  return (
    <div className={styles.container}>
      <MainTitle />
      <MainPageShowcase />
    </div>
  );
}
