import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import DecryptedText from "./DecryptedText";
import MagicBento from "./MagicBento";
import Dock from "./Dock";
import Dither from "./Dither"; // import Dither
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import "./App.css";

// Layout (shared across all pages)
function Layout({ children }) {
  const navigate = useNavigate();

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => navigate('/') },
    { icon: <VscArchive size={18} />, label: 'About', onClick: () => navigate('/about') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Under construction!') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Under construction!') },
  ];

  return (
    <div className="App" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Dither Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      {/* Page Content */}
      <main>{children}</main>

      {/* Dock as bottom navbar */}
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
}

// Home Page
function Home() {
  return (
    <section className="hero">
      <h1>Welcome.</h1>
      <DecryptedText text="Learn more about synmade below." />

      <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
      />
    </section>
  );
}

// About Page
function About() {
  return (
    <>
      <section className="hero">
        <h1>About synmade</h1>
        <p>
          I’m synmade — a creator who loves experimenting. 
          Whether it’s music, Roblox games, or web design, 
          I’m always creating something new for fun.
        </p>

        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        >
          Discover My Projects
        </MagicBento>
      </section>

      <section className="features">
        <h2>What I Create</h2>
        <p>
          From interactive websites to immersive games, I focus on engaging 
          experiences that mix creativity and technology.
        </p>
      </section>

      <section className="animate-section">
        <h2>My Philosophy</h2>
        <p>
          Learning by doing and sharing my creations inspires both myself 
          and others to push creative boundaries.
        </p>
      </section>
    </>
  );
}

// App with Routes
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
