import styles from "../styles/Home.module.css";
import MainContent from "./MainContent";
import LeftBar from "./leftBar";
import TopBar from "./topBar";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <LeftBar className={styles.leftBar} />
      <TopBar className={styles.topBar} />
      <MainContent className={styles.mainContent} />
    </div>
  );
}

export default Home;
