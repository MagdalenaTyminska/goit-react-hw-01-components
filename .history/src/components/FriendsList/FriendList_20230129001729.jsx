export const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(friend => (
      <li className="item" key={friend.id}>
        <span className={`${friend.isOnline}` ? `onLine` : `offLine`}></span>
        <img
          className="avatar"
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{friend.name}</p>
      </li>
    ))}
  </ul>
);
