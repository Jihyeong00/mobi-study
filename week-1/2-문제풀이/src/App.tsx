import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/main";
import Todo from "./pages/todo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/todo",
      element: <Todo />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
