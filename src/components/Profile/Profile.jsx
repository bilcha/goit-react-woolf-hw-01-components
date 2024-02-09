import styles from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={styles.avatar}
          
        />
        <h2 className="name">{username}</h2>
        <p className={styles.greyText}>{tag}</p>
        <p className={styles.greyText}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <p className={styles.greyText}>Followers</p>
          <p className="quantity">{stats.followers}</p>
        </li>
        <li className={styles.statsItem}>
          <p className={styles.greyText}>Views</p>
          <p className="quantity">{stats.views}</p>
        </li>
        <li className={styles.statsItem}>
          <p className={styles.greyText}>Likes</p>
          <p className="quantity">{stats.likes}</p>
        </li>
      </ul>
  </div>
  )
}