import React from "react";
import DecryptedText from "./DecryptedText";
import StarBorder from "./StarBorder"; // make sure this path is correct
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <h1>Synmade</h1>
        <p>Hover the text to decrypt:</p>
        <DecryptedText text="Welcome to Synmade's home page!" />

        {/* StarBorder Explore Button */}
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
          characters="synmade is that you!?"
          className="revealed"
          parentClassName="all-letters"
          encryptedClassName="encrypted"
        />
      </section>

      {/* Animate On View Section */}
      <section className="animate-section">
        <h2>In View Animations</h2>
        <DecryptedText
          text=":p"
          animateOn="view"
          revealDirection="center"
        />
      </section>
    </div>
  );
}

export default App;
