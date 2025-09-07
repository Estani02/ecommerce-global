import Link from "next/link";
import {ShoppingCart} from "lucide-react";

import style from "./header.module.css";

export default function Header() {
  return (
    <header className={`${style.header}`}>
      <Link className={style.logo} href="/">
        <p>Global Commerce</p>
      </Link>
      <button className={style.btn_cart} type="button">
        <ShoppingCart className={style.icon_cart} size={18} />
      </button>
    </header>
  );
}
