import user from './SocialMediaProfile/user.json';
import { Profile } from './SocialMediaProfile/Profile';
import data from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';

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
      
    </>
  );
};
