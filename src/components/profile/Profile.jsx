import styles from './Profile.module.css';
import PropTypes from "prop-types";

const Profile = ({ username, tag, location, avatar, views, likes, followers }) => (
    <div class={styles.profile}>
        <div className={styles.description}>
            <img src={avatar} alt="User avatar" className={styles.avatar} />
            <p className={styles.name}>{username}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>

        <ul class={styles.stats}>
            <li>
                <span className={styles.label}>Followers</span>
                <span className={styles.quantity}>{followers}</span>
            </li>
            <li>
                <span className={styles.label}>Views</span>
                <span className={styles.quantity}>{views}</span>
            </li>
            <li>
                <span class={styles.label}>Likes</span>
                <span class={styles.quantity}>{likes}</span>
            </li>
        </ul>
    </div>
);

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
};

export default Profile;

