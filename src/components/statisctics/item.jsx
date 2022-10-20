import styles from "./Statistics.module.css";

function Item({ id, label, percentage }) {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}

export default Item;