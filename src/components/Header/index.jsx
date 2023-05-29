import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";


export function Header() {
  return (
    <header className={styles.header}>
      <h1>
        Calculadora IMC
      </h1>

      <nav className={styles.navigationContainer}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/table">Tabela IMC</NavLink>
      </nav>
    </header>
  );
}
