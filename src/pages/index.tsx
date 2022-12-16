import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  function useRandomNumber() {
    const [number, setNumber] = useState<number>();

    useEffect(() => {
      fetch("/api/randomNumber")
        .then((response) => response.text())
        .then((text) => setNumber(+text));
    }, []);

    return number;
  }
  const number = useRandomNumber();
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h3>Random number: {number}</h3>
      </main>
    </div>
  );
}
