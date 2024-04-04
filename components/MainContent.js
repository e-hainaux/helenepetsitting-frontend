import React from "react";
import styles from "../styles/MainContent.module.css";

function MainContent() {
  return (
    <div className={styles.mainContainer}>
      <h1>BIENVENUE !</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan
        pulvinar euismod. Duis et finibus ligula. Curabitur quis elit non quam
        iaculis consectetur. Aliquam ullamcorper augue ut tortor cursus, eu
        congue purus iaculis. Nullam ut luctus nisl. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas.
        Aliquam aliquet pellentesque velit, a ornare metus tincidunt a. Cras
        finibus turpis non condimentum faucibus.
      </p>
    </div>
  );
}

export default MainContent;
