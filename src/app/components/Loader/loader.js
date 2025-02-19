import { useRef } from "react";
import styles from "./loader.module.css";

console.log(styles)

export default function Loader() {

    return (
        <div className="loader-container">
            <div className={`${styles.modal} ${styles["modal-open"]}`}>
                <div className={styles.loader}></div>
            </div>
        </div>
    );
}