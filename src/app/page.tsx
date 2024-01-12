import MainTitle from "../components/mainTitle/mainTitle";
import styles from "./homepage.module.css";
import MainPageShowcase from "../components/mainPageShowcase/mainPageShowcase";

export default function Home() {
  const Home = () => {
    console.log("logging in");
  };

  return (
    <div className={styles.container}>
      <MainTitle />
      <MainPageShowcase />
    </div>
  );
}
