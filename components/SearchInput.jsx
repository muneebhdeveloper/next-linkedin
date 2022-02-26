import React from "react";
import { BiSearch } from "react-icons/bi";
import styles from "../styles/SearchInput.module.scss";

export const SearchInput = () => {
  return (
    <div className={styles.box}>
      <span className={styles.icon}>
        <BiSearch />
      </span>
      <input className={styles.input} type="text" placeholder="Search" />
    </div>
  );
};
