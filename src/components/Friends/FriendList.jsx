import { FriendListItem } from "./FriendListItem";
import styles from "./FriendList.module.css";
import PropTypes from "prop-types";

export const FriendList = ({ friends }) => {
    return (
        <ul className={styles.list}>

        {friends.length &&
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

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};