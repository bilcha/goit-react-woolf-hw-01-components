import styles from "./FriendsList.module.css"

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.listItem}>
      <span className={`${styles.status} ${isOnline ? styles["isOnline"] : styles["notOnline"]  }`}> {isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  )
}