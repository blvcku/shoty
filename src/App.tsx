import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Topbar } from "./components/Topbar/Topbar";
import { UploadModal } from "./components/UploadModal/UploadModal";
import GlobalStyle from "./GlobalStyle";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<UploadModal />}></Route>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
