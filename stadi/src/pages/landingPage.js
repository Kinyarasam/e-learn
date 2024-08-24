import "../landingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <a href="/" className="logo">
          <svg viewBox="0 0 24 24" className="icon">
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span className="sr-only">Stadi</span>
        </a>
        <nav>
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="container">
            <h1>Collaborative Learning Reimagined</h1>
            <p>Create, share, and learn together with our innovative multimedia educational platform.</p>
            <div className="cta-buttons">
              <button className="button primary">Get Started</button>
              <button className="button secondary">Learn More</button>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <h2>Key Features</h2>
            <div className="feature-grid">
              {[
                { icon: '🎥', title: 'Video Lessons', description: 'Create and share engaging video content with your peers.' },
                { icon: '🎙️', title: 'Audio Podcasts', description: 'Record and distribute educational podcasts on various topics.' },
                { icon: '👥', title: 'Collaborative Projects', description: 'Work together on assignments and research projects.' }
              ].map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="multimedia">
          <div className="container">
            <h2>Multimedia Learning</h2>
            <div className="multimedia-grid">
              {[
                { title: 'Interactive Quizzes', description: 'Engage with content through fun and challenging quizzes.' },
                { title: 'Virtual Whiteboards', description: 'Collaborate in real-time with shared digital whiteboards.' },
                { title: '3D Models', description: 'Explore complex concepts with interactive 3D models.' }
              ].map((item, index) => (
                <div key={index} className="multimedia-item">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="testimonials">
          <div className="container">
            <h2>What Our Users Say</h2>
            <div className="testimonial-grid">
              {[1, 2, 3].map((i) => (
                <div key={i} className="testimonial-card">
                  <p>"Stadi has transformed the way I learn and teach. The collaborative features are amazing!"</p>
                  <div className="user-info">
                    <img src="/placeholder.svg" alt="User avatar" className="user-avatar" />
                    <div>
                      <p className="user-name">Sarah Johnson</p>
                      <p className="user-role">Student</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="cta">
          <div className="container">
            <h2>Join Our Learning Community</h2>
            <p>Start creating, sharing, and learning with peers from around the world.</p>
            <form className="signup-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="button primary">Sign Up</button>
            </form>
            <p className="terms">
              By signing up, you agree to our{" "}
              <a href="/">Terms & Conditions</a>
            </p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>© 2024 Stadi. All rights reserved.</p>
        <nav>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy</a>
        </nav>
      </footer>
    </div>
  );
}

export default LandingPage;
