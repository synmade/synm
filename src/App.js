import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DecryptedText from "./DecryptedText";
import StarBorder from "./StarBorder";
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
    </>
  );
}

// About Page
function About() {
  return (
    <>
      <section className="hero">
        <h1>About Synmade</h1>
        <p>
          I’m Synmade — a creator who loves experimenting. 
          Whether it’s making music, building Roblox games, or 
          designing websites, I’m always creating something new for fun.
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
