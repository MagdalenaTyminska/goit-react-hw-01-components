import user from './SocialMediaProfile/user.json';
import { Profile } from './SocialMediaProfile/Profile';
import data from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';
import friends from './FriendsList/friends.json';
import { FriendList } from './FriendsList/FriendList';
// import items from './Transactions/transactions.json';
// import { TransactionHistory } from './Transactions/Transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      {/* <TransactionHistory items={items} /> */}
    </>
  );
};
