import user from './1.SocialMediaProfile/user.json';
import { Profile } from './1.SocialMediaProfile/Profile';

export const App = () => {
  return (
    <>
      <Profile
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
