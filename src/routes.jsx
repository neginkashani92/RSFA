import App from "./App";
import Setting from "./pages/Setting.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Client from "./pages/Client.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "setting", element: <Setting /> },
       { path: "client", element: <Client /> },
    ],
  },
];

export default routes;