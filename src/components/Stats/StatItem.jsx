import styles from "./Statistics.module.css";
import { getRandomHexColor } from "utils/getRandomHexColor";

export const StatItem = ({ id, label, percentage }) => {
    return (
        <li 
            className={styles.item}
            style={{
                backgroundColor: getRandomHexColor(),
            }}
            >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
        </li>
    );
};