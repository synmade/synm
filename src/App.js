import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DecryptedText from "./DecryptedText";
import MagicBento from "./MagicBento";
import "./App.css";

// Layout (shared across all pages)
function Layout({ children }) {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* Page Content */}
      <main>{children}</main>
    </div>
  );
}

// Home Page
function Home() {
  return (
    <>
      <section className="hero">
        <h1>Welcome.</h1>
        <DecryptedText text="Learn more about Synmade below." />


        {/* MagicBento Interactive Cards */}
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
    </>
  );
}


// About Page
function About() {
  return (
    <>
      <section className="hero">
        <h1>About SYNmade</h1>
        <p>
          I’m SYNmade — a creator who loves experimenting. 
          Whether it’s music, Roblox games, or web design, 
          I’m always creating something new for fun.
        </p>

        {/* MagicBento Interactive Text */}
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
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
