import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />;
    </ThemeContextProvider>
  );
}

export default App;
