import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DecryptedText from "./DecryptedText";
import StarBorder from "./StarBorder";
import "./App.css";

// Home Page
function Home() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to SYNmade</h1>
        <p>Hover the text to decrypt:</p>
        <DecryptedText text="Hover me!" />

        <StarBorder
          as="button"
          className="cta-button"
          color="cyan"
          speed="5s"
        >
          Explore
        </StarBorder>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Custom Animations</h2>
        <DecryptedText
          text="Customize me"
          speed={100}
          maxIterations={20}
          characters="ABCD1234!?"
          className="revealed"
          parentClassName="all-letters"
          encryptedClassName="encrypted"
        />
      </section>

      {/* Animate On View Section */}
      <section className="animate-section">
        <h2>In View Animations</h2>
        <DecryptedText
          text="This text animates when in view"
          animateOn="view"
          revealDirection="center"
        />
      </section>
    </div>
  );
}

// About Page
function About() {
  return (
    <div className="App">
      <section className="about">
        <h1>About SYNmade</h1>
        <p>
          SYNmade is a creative project exploring animations, interactivity, and
          custom web design.
        </p>
      </section>
    </div>
  );
}

// Main App
function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
