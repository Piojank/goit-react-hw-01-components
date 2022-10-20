import styles from "./Statistics.module.css";

function Item({ id, label, percentage }) {
    return (
        <li class={styles.item}>
            <span class={styles.label}>{label}</span>
            <span class={styles.percentage}>{percentage}%</span>
        </li>
    );
}

export default Item;