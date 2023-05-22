import Item from "./item";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ statistics, title }) => {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>{title}</h2>
            <ul className={styles.statList}>
        {statistics.length > 0 &&
            statistics.map(({ id, label, percentage }) => (
                <Item key={id} id={id} label={label} percentage={percentage} />
            ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
};

export default Statistics;