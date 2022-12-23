import App from "./App";
import Forget from "./pages/Forget";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp ";
import PrivateRoute from "./components/PrivateRoute";

const routes = [
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <Forget />,
  },
];

export default routes;
