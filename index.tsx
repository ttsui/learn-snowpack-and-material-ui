import React from "react";
import ReactDOM from "react-dom";
import UsersTable from "./components/UsersTable";

interface User {
  id: number;
  avatarUrl: string;
  name: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Tony Tsui",
    avatarUrl: "https://ca.slack-edge.com/T3V0U2GSF-U4KEBJF0R-526a7cc21564-512",
  },
  {
    id: 2,
    name: "Katarina Smith",
    avatarUrl:
      "https://material-kit-react.devias.io/static/images/avatars/avatar_6.png",
  },
];

function App() {
  return <UsersTable users={users} />;
}

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
