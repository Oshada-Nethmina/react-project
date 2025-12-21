import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage1 from "./pages/HomePage1/HomePage1";
import HomePage2 from "./pages/HomePage2/HomePage2";
import Login from "./pages/Login/Login";
import Login2 from "./pages/Login2/Login2";
import Login3 from "./pages/Login3/Login3";
import LastPage from "./pages/LastPage/LastPage";


function App() {
  return (
    <>
      {/* <HomepageButton /> */}
      {/* <NavbarButton /> */}
      {/* <Footer /> */}
      {/* <Header /> */}
      {/* <HomePage1 /> */}
      {/* <HomePage2 /> */}
      {/* <ProgressBar /> */}
      {/* <InputField /> */}
      {/* <SwitchBar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/Page-1" />} />
          <Route path="/Page-1" element={<HomePage1 />} />
          <Route path="/Page-2" element={<HomePage2 />} />
          <Route path="/Page-3" element={<Login />} />
          <Route path="/Page-4" element={<Login2 />} />
          <Route path="/Page-5" element={<Login3 />} />
          <Route path="/Page-6" element={<LastPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


