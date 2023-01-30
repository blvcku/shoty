import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Topbar } from "./components/Topbar/Topbar";
import { UploadModal } from "./components/UploadModal/UploadModal";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<UploadModal />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
