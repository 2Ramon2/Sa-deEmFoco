import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import styles from "./layout.module.scss";

export function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
    </div>
  );
}
