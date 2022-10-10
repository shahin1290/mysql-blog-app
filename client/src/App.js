import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is Home</div>,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
