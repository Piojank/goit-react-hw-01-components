import styles from "./Statistics.module.css";

const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
};


const Item = ({ id, label, percentage }) => {
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
}

export default Item;