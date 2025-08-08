import App from "./App";
import Setting from "./pages/Setting.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "setting", element: <Setting /> },
    ],
  },
];

export default routes;