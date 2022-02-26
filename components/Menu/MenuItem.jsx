import React from "react";
import Link from "next/link";
import styles from "../../styles/MenuItem.module.scss";
import classNames from "classnames";

export const MenuItem = ({ link, name, isActive, Icon }) => {
  return (
    <li className={classNames(styles.item, { [styles.active]: isActive })}>
      <Link href={link}>
        <a className={styles.wrapper}>
          <span className={styles.icon}>{Icon}</span>
          <p className={styles.name}>{name}</p>
        </a>
      </Link>
    </li>
  );
};
