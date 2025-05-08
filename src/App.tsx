import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/layout/Layout";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/customcomponents/ProtectedRoute"; 
import NotFound from "./pages/NotFound";
import OtpVerification from "./pages/OtpVerification";
import LoginRedirect from "./components/customcomponents/LoginRedirect";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginRedirect />,
  },
  {
    path: "/login",
    element: <LoginRedirect />,
  },
  {
           path: '/verify-otp',
           element:<OtpVerification/>
  },

  // admin routes / protected routes 
  {
    path: "/admin",
    element: <ProtectedRoute />, 
    children: [
      {
        path: "", 
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "users",
            element: <Users />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },{
    path:'*',
    element:<NotFound/>
  }
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
