import Profile from "components/profile/Profile";
import Statistics from "components/statisctic/Statistics";

import user from "./data/user.json";
import datastats from "./data/datastats.json";

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
                <Statistics title="Upload stats" statistics={datastats} />
            </header>
        </div>
    );
}

export default App;