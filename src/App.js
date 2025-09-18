import React from "react";
import DecryptedText from "./DecryptedText";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ padding: "4rem", textAlign: "center" }}>
      <h1>Welcome to SYNmade</h1>

      <p style={{ margin: "2rem 0", fontSize: "1.5rem" }}>
        Hover the text to decrypt:
      </p>
      <DecryptedText text="Hover me!" />

      <p style={{ margin: "2rem 0", fontSize: "1.5rem" }}>
        Custom speed and characters:
      </p>
      <DecryptedText
        text="Customize me"
        speed={100}
        maxIterations={20}
        characters="ABCD1234!?"
        className="revealed"
        parentClassName="all-letters"
        encryptedClassName="encrypted"
      />

      <p style={{ margin: "2rem 0", fontSize: "1.5rem" }}>
        Animate when in view:
      </p>
      <div style={{ marginTop: "4rem" }}>
        <DecryptedText
          text="This text animates when in view"
          animateOn="view"
          revealDirection="center"
        />
      </div>
    </div>
  );
}

export default App;
