import styles from "./TransactionHistory.module.css";
import TransactionHistoryItem from "./TransactionHistoryItem";
import propTypes from "prop-types";

const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.transactionHistory}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <TransactionHistoryItem
                        key={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                    />
                ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: propTypes.array,
};

export default TransactionHistory;