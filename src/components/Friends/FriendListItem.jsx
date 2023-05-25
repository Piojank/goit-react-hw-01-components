import styles from "./FriendList.module.css";

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <li class={styles.item}>

            {isOnline ? (
                <span className={styles.status__green}>{isOnline}</span>
            ) : (
                <span className={styles.status__red}>{isOnline} </span>
            )}

            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p class={styles.name}>{name}</p>
        </li>
    );
};