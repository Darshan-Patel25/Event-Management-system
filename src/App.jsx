
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>

      <Route
        path="*"
        element={
          // <PrivateRouteWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/events" element={<AllEvents />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/test" element={<EventForm />} /> */}
            </Routes>
          // </PrivateRouteWrapper>
        }
      />
    </Routes>
  </BrowserRouter>
  );
}



export default App;
