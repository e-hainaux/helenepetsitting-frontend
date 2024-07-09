import styles from "../styles/Home.module.css";
import MainContent from "./MainContent";
import LeftBar from "./LeftBar";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <LeftBar className={styles.leftBar} />
      <MainContent className={styles.mainContent} />
    </div>
  );
}

export default Home;
