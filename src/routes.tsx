import { Router, Route, createBrowserRouter } from "react-router-dom";

import Login from "./pages/login";
import NewPost from "./pages/NewPost";
import PostList from "./pages/PostList";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/new/post",
    element: <NewPost />,
  },
  { path: "/post/list", element: <PostList /> },
]);

export default router;
