export const FriendList = ({ avatar, name, isOnline }) => (
    <ul class="friend-list">
        {friends.map(friend => (
                    <li className="item" key={friend.id}>
                        {(friend.isOnline) ? <span className={css.online}></span> : <span className={css.offline}></span>}
                        <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                        <p className={css.name}>{friend.name}</p>
                    </li>
                ))}
    </ul>
);