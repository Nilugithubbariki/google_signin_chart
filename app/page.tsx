import LoginView from "@/components/LoginView";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <LoginView />
    </main>
  );
}
