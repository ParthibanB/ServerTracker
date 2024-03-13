import { BrowserRouter, Route, Routes, useLocation,Navigate   } from "react-router-dom";
import LoginPage from './pages/login/Login';
import MainLayout from "./components/layout/MainLayout";
import { routes } from "./routes";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to login */}
         <Route path="/login" element={<LoginPage />} /> {/* Login page route */}
        <Route
          path="/"
          element={<MainLayout />}>
          {routes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
