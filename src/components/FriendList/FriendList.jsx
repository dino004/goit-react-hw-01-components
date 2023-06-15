import css from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import friends from 'dataFiles/friends.json';

export const FriendList = () => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
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
