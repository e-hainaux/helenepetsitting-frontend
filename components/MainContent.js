import React from "react";
import styles from "../styles/MainContent.module.css";
import Image from "next/image";
import UKflag from "../public/Images/UKflag.png";

function MainContent() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.buttonsContainer}>
        <button
          disabled={false}
          className={styles.button}
          onClick={() => {
            console.log("Clic sur contact !");
          }}
        >
          Contact / Devis gratuit
        </button>
        {/* <div className={styles.flagBtn}>
          <Image
            src={UKflag}
            className={styles.flagPic}
            c
            onClick={() => {
              console.log("Clic sur drapeau !");
            }}
          />
        </div> */}
      </div>

      <div className={styles.txtContainer}>
        <h1>BIENVENUE !</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan
          pulvinar euismod. Duis et finibus ligula. Curabitur quis elit non quam
          iaculis consectetur. Aliquam ullamcorper augue ut tortor cursus, eu
          congue purus iaculis. Nullam ut luctus nisl. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Aliquam aliquet pellentesque velit, a ornare metus tincidunt
          a. Cras finibus turpis non condimentum faucibus. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nam accumsan pulvinar euismod. Duis
          et finibus ligula. Curabitur quis elit non quam iaculis consectetur. -
          FIN DU PARAGRAPHE -
        </p>
      </div>
    </div>
  );
}

export default MainContent;
