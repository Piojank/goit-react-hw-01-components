import "./App.css";
import Profile from "./components/profile/Profile";
import Statistics from "./components/stats/Statistics";
import FriendList from "./components/friends/FriendList";
import TransactionHistory from "./components/transaction/TransactionHistory";

import user from "./data/user.json";
import stats from "./data/stats.json";
import friends from "./data/friends.json";
import items from "./data/transactions.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          views={user.stats.views}
          likes={user.stats.likes}
          followers={user.stats.followers}
        />
        <Statistics title="Upload stats" statistics={stats} />
        <FriendList friends={friends} />
        <TransactionHistory items={items} />
      </header>
    </div>
  );
}

export default App;