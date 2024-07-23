import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages";
import { ShowCreators } from "./pages/ShowCreators";
import { ViewCreator, loader as creatorLoader } from "./pages/ViewCreator";
import { ErrorPage } from "./pages/ErrorPage";
import { EditCreator, loader as creatorEditLoader } from "./pages/EditCreator";
import { AddCreator } from "./pages/AddCreator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <ShowCreators />,
      },
      {
        path: "/creators",
        element: <ShowCreators />,
      },
      {
        path: "/creators/:creatorId",
        element: <ViewCreator />,
        loader: creatorLoader,
      },
      {
        path: "/creators/edit/:creatorId",
        element: <EditCreator />,
        loader: creatorEditLoader,
      },
      {
        path: "/creators/new",
        element: <AddCreator />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
