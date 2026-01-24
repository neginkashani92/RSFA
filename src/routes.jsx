import ProtectedRoute from "./components/ProtectedRoute.jsx";
import App from "./App";
import Setting from "./pages/Setting.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Client from "./pages/Client.jsx";
import Login from "./pages/Login.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <Login /> }, 

      {
        element: <ProtectedRoute />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "setting", element: <Setting /> },
          { path: "client", element: <Client /> },
        ],
      },
    ],
  },
];

export default routes;
