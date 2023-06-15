import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li key={id} className={css.item}>
          <span
            className={isOnline ? css.statusOnline : css.statusOffline}
          ></span>

          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
