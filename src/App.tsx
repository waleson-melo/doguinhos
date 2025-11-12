import AppRoutes from "@/AppRoutes";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <BrowserRouter basename="/doguinhos">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
