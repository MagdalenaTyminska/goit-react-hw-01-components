export const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(friend => (
      <li className="item" key={friend.id}>
        {friend.isOnline ? (
          <span className="onLine"></span>
        ) : (
          <span className="offLine"></span>
        )}
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
