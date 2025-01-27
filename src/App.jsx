import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import RegisterForm from "./components/Register";
import ProfilePage from "./components/Profile";
import AllEvents from "./components/AllEvents";
import EventForm from "./components/Test";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/test" element={<EventForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
