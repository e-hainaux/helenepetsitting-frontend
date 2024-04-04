import React from "react";
import styles from "../styles/MainContent.module.css";
import Image from "next/image";
import UKflag from "../public/Images/UKflag.png";
import Bienvenue from "./Bienvenue";
import MesServices from "./MesServices";
import MesEngagements from "./MesEngagements";
import VosEngagements from "./VosEngagements";

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
        <Bienvenue />
        <MesServices />
        <MesEngagements />
        <VosEngagements />
      </div>
    </div>
  );
}

export default MainContent;
