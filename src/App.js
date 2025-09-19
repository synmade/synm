import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import DecryptedText from "./DecryptedText";
import MagicBento from "./MagicBento";
//import Dock from "./Dock";
import Dither from "./Dither"; // import Dither
//import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import "./App.css";
import StaggeredMenu from "./StaggeredMenu";
import FuzzyText from './FuzzyText';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

function Layout({ children }) {
 return (
    <div className="App" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Dither background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
      >
        <Dither
          waveColor={[0.2, 0, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      {/* StaggeredMenu */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="var(--white)"
        openMenuButtonColor="var(--purple-primary)"
        changeMenuColorOnOpen={true}
        colors={['#B19EEF', '#5227FF']}
        logoUrl="https://raw.githubusercontent.com/synmade/synm/refs/heads/main/src/synlogo.svg"
        accentColor="var(--purple-primary)"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />

      {/* Page content */}
      <main>{children}</main>
    </div>
  );
}

// Home Page
function Home() {
  return (
    <div className="hero">
      {/* Welcome Section */}
      <section className="welcome-section">
        <FuzzyText 
          baseIntensity={0.2} 
          hoverIntensity={0.5} 
          enableHover={true}
        >
          Welcome.
        </FuzzyText>
      </section>

      {/* Magic Bento Section */}
      <section className="bento-section">
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

      {/* Spotify Section */}
      <section className="spotify-section">
        <h2>Now Playing</h2>
        <iframe
          title="Talking To The Robots"
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/7gmszk7lYOwxQxRurFHCMd?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
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
