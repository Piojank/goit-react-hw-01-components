import { StatItem } from "./StatItem";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

export const Statistics = ({ statistics, title }) => {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>{title}</h2>
                <ul className={styles.list}>
                    
                {statistics.length > 0 &&
                    statistics.map((stat) => (
                        <StatItem 
                            key={stat.id} 
                            id={stat.id} 
                            label={stat.label} 
                            percentage={stat.percentage} 
                        />
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
