import { Router, Route, createBrowserRouter } from "react-router-dom";

import Login from "./pages/login";
import NewPost from "./pages/NewPost";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/new/post",
    element: <NewPost />,
  },
]);

export default router;
