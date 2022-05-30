import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

const Header = () => {

  return (
    <div id={`${styles.header}`}>
      <img
        id={`${styles.logo}`}
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
      />

      <div id={`${styles.header_menu}`}>
        <a className={`${styles.header_item}`} href="#">
          Inicio
        </a>

        <a className={`${styles.header_item}`} href="#">
          Series
        </a>

        <a className={`${styles.header_item}`} href="#">
          Peliculas
        </a>

        <a className={`${styles.header_item}`} href="#">
          Novedades
        </a>

        <a className={`${styles.header_item}`} href="#">
          Mi lista
        </a>
      </div>

      <img
        id={`${styles.user}`}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="user"
      />
    </div>
  );
};

export default Header