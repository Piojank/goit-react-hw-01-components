import { StatItem } from "./StatItem";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

export const Statistics = ({ statistics, title }) => {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>{title}</h2>
            <ul className={styles.statList}>
        {statistics.length > 0 &&
            statistics.map(({ id, label, percentage }) => (
                <StatItem key={id} id={id} label={label} percentage={percentage} />
            ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    statistics: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
    title: PropTypes.string.isRequired,
};
