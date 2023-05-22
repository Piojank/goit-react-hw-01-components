import styles from "./FriendList.module.css";

const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <li class={styles.item}>

            {isOnline === true ? (
                <span className={styles.status}>{isOnline}</span>
            ) : (
                <span className={styles.statusRed}>{isOnline} </span>
            )}

            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p class={styles.name}>{name}</p>
        </li>
    );
};

export default FriendListItem;