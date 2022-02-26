import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.scss";
import classNames from "classnames";
import { SearchInput } from "./SearchInput";
import { MenuItem } from "./Menu/MenuItem";
import navItems from "../data/nav-items";

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.wrapper, "container")}>
        <div className={styles.left}>
          <Link href="/">
            <a>
              <Image
                src="/assets/logo.png"
                alt="Linkedin"
                width={34}
                height={34}
              />
            </a>
          </Link>
          <SearchInput />
        </div>
        <div className={styles.right}>
          <ul className={styles.navItems}>
            {navItems.map((item) => (
              <MenuItem
                key={item.name}
                name={item.name}
                Icon={<item.icon />}
                link={item.link}
                isActive={false}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
