import Image from "next/image";
import styles from "./page.module.css";
import { data } from '@/data/test'

export default function Home() {
  return (
    <div style={{
      color: data.color
    }} className={styles.page}>
      this is a test page!!!!!!!!!!!!!! check it out!!!!!!!!!!!!!!!!!!! 
    </div>
  );
}
