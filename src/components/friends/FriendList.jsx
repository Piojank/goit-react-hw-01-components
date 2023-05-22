import FriendListItem from "./FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>

        {friends.length > 0 &&
            friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListItem
                key={id}
                id={id}
                isOnline={isOnline}
                avatar={avatar}
                name={name}
            />
        ))}

        </ul>
    );
};

export default FriendList;
