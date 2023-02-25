import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import SignIn from "./pages/signin/SignIn";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<SignIn />}></Route>
        <Route path="/home" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
