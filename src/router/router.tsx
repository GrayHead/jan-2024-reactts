import {createBrowserRouter, RouteObject} from "react-router-dom";
import App from "../App";
import UserPage from "../pages/UserPage";
import PostsPage from "../pages/PostsPage";
import UsersPage from "../pages/UsersPage";

const routes: RouteObject[] = [
    {
        path: '', element: <App/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'users/:id', element: <UserPage/>},


        ]
    }
]

export const router = createBrowserRouter(routes);
