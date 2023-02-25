import { Route, Routes } from "react-router-dom";
import MediumButton from "./components/Button/Medium/MediumButton";
import Card from "./components/Card/Card";
import Dashboard from "./pages/dashboard/Dashboard";
import SignIn from "./pages/signin/SignIn";

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="" element={<SignIn />}></Route>
        <Route path="/home" element={<Dashboard />}></Route>
      </Routes> */}
      <Card />
    </div>
  );
}

export default App;
