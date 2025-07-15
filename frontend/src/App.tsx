import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CryptoTicker from "./components/CryptoTicker";
import FeedPage from "./pages/FeedPage";
import LaunchpadPage from "./pages/LaunchpadPage";
import CommunityPage from "./pages/CommunityPage";
import LivesPage from "./pages/LivesPage";
import MyPage from "./pages/MyPage";
import { AuthProvider } from "./context/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <CryptoTicker />
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
    </AuthProvider>
  );
};

export default App;