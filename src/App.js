import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Navbar } from "./components";
import { Error404, Homepage } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [{ index: true, element: <Homepage /> }],
      errorElement: <Error404 />,
    },
  ]);
  return (
    <div className="h-100">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
