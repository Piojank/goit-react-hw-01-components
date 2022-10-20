import Item from "./item";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ statistics, title }) => {
    return (
        <section class={styles.statistics}>
            <h2 class={styles.title}>Upload stats</h2>

            <ul class={styles.statList}>
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
}

export default Statistics;