import { RouterProvider } from "react-router-dom";
import { Router } from "./Routes/Router/Router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div>
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
