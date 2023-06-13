import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li key={friends.id} className={css.item}>
          {friend.isOnline ? (
            <span className={css.statusOnline}></span>
          ) : (
            <span className={css.statusOffline}></span>
          )}
          <img
            className={css.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.protoTypes = {
  friends: PropTypes.object,
};
