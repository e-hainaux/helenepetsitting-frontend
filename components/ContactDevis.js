import React, { useState } from "react";
import styles from "../styles/ContactDevis.module.css";
// import ReCAPTCHA from "react-google-recaptcha";

import BackBar from "./BackBar";

function ContactDevis({ onClose }) {
  const [token, setToken] = useState(null);
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [societe, setSociete] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [commentaire, setCommentaire] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log("Clic sur submit !");
  };
  return (
    <div className={styles.mainContainer}>
      <BackBar onClose={onClose} />

      <div className={styles.content}>
        <h1>CONTACT / DEVIS GRATUIT</h1>
        <div className={styles.txtContainer}>
          <p>
            Pour toute demande, veuillez remplir le formulaire suivant en
            précisant au moins une adresse mail ou un numéro de téléphone :{" "}
          </p>
        </div>
        <div className={styles.formulaireContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="prenom">Prénom</label>
              <input
                type="text"
                id="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                id="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className={styles.input}
              />
            </div>
            {/* <div className={styles.formGroup}>
              <label htmlFor="societe">Société</label>
              <input
                type="text"
                id="societe"
                value={societe}
                onChange={(e) => setSociete(e.target.value)}
                className={styles.input}
              />
            </div> */}
            {/* <p className={styles.info}>
              - Veuillez renseigner au moins l'un des champs mail ou téléphone -
            </p> */}
            <div className={styles.formGroup}>
              <label htmlFor="email">Adresse mail</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="telephone">Numéro de téléphone</label>
              <input
                type="tel"
                id="telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="commentaire">Commentaire</label>
              <textarea
                id="commentaire"
                value={commentaire}
                onChange={(e) => setCommentaire(e.target.value)}
                className={styles.textarea}
              ></textarea>
            </div>
            <div className={styles.message}>{message}</div>
            <div className={styles.btnContainer}>
              {/* <ReCAPTCHA
                sitekey={siteKey}
                onChange={(value) => setToken(value)}
              /> */}
              <button disabled={!token} type="submit" className={styles.button}>
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactDevis;
