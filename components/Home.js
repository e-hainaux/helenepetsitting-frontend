import styles from "../styles/Home.module.css";
import MainContent from "./MainContent";
import LeftBar from "./leftBar";

import TopBar from "./topBar";

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <LeftBar />
        <TopBar />
        <MainContent />
      </main>
    </div>
  );
}

export default Home;
