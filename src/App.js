import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Inputs from "./components/Inputs";
import Navbar from "./components/Navbar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [{ index: true, element: <Inputs /> }],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
