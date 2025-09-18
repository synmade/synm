import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import DecryptedText from "./DecryptedText";
import MagicBento from "./MagicBento";
import Dock from "./Dock";
import Dither from "./Dither"; // import Dither
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import "./App.css";
import StaggeredMenu from "./StaggeredMenu";

function Layout({ children }) {
  const navigate = useNavigate();

  // Menu links
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  // Social links
  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  return (
    <div className="App">
      {/* StaggeredMenu always available */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="var(--purple-primary)"
        openMenuButtonColor="var(--white)"
        changeMenuColorOnOpen={true}
        colors={['#B19EEF', '#5227FF']}
        logoUrl="/logo.svg"
        accentColor="var(--purple-primary)"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />

      {/* Page content */}
      <main>{children}</main>
    </div>
  );
}

export default Layout;


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
