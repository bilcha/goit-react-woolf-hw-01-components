import { FriendListItem } from "./FriendListItem/FriendListItem"

import styles from "./FriendsList.module.css"

export const FriendList = ({friends}) => {
  return (
    <ul className={styles.friendList}>{friends.map(({id, avatar, name, isOnline}) =>
      <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
    )}
    </ul>
  )
}