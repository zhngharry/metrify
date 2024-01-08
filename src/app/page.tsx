import styles from "./homepage.module.css";
import Login from "../components/Login/login";

export default function Home() {

  const login = () => {
    console.log("logging in");
  }

  return (
    <div className={styles.container}>
      Metrify

      <Login/>
    </div>
  );
}