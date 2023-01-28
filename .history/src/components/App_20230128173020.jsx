import user from './1.SocialMediaProfile/user.json';
import { Profile } from './1.SocialMediaProfile/Profile';

export const App = () => {
  return (
    <>
      <Profile
      />
      <Statistics/>
      <FriendList/>
      <TransactionHistory/>
    </>
  );
};
