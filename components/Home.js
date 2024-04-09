import styles from "../styles/Home.module.css";
import MainContent from "./MainContent";
import LeftBar from "./LeftBar";
import TopBar from "./TopBar";

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
