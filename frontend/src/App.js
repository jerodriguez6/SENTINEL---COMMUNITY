import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedPage from "./pages/FeedPage";
import LaunchpadPage from "./pages/LaunchpadPage";
import CommunityPage from "./pages/CommunityPage";
import LivesPage from "./pages/LivesPage";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/launchpad" element={<LaunchpadPage />} />
          <Route path="/lives" element={<LivesPage />} />
          <Route path="/articles" element={<CommunityPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/notifications" element={<FeedPage />} />
          <Route path="/more" element={<FeedPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;