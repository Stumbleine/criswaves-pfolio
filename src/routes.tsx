import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      /*       {
        path: "grammar",
        element: <ReadingMainPage />,
      },
      {
        path: "reading",
        element: <ReadingMainPage />,
      },
      {
        path: "reading/:id",
        element: <ReadingPage />,
      },
      {
        path: "listening",
        element: <ReadingMainPage />,
      }, */
    ],
  },
]);

export default router;
