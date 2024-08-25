import React from 'react';
import '../FeaturesPage.css';
import '../landingPage.css';

const FeaturesPage = () => {
  const features = [
    {
      title: "Collaborative Content Creation",
      description: "Work together with peers to create rich, interactive learning materials. Our platform supports real-time collaboration, allowing multiple users to edit and contribute simultaneously.",
      icon: "👥📝"
    },
    {
      title: "Multimedia Integration",
      description: "Enhance your learning content with various multimedia formats. Easily embed videos, audio clips, interactive quizzes, and 3D models to create engaging and comprehensive learning experiences.",
      icon: "🎥🎧"
    },
    {
      title: "Live Virtual Classrooms",
      description: "Host or join live virtual classes with video conferencing, screen sharing, and interactive whiteboards. Foster real-time discussions and collaborative problem-solving sessions.",
      icon: "🏛️💻"
    },
    {
      title: "Adaptive Learning Paths",
      description: "Our AI-powered system creates personalized learning paths for each user, adapting to their progress and learning style to ensure optimal knowledge retention and skill development.",
      icon: "🧠🛤️"
    },
    {
      title: "Peer Review System",
      description: "Implement a robust peer review process for content quality assurance. Users can provide feedback, suggest improvements, and rate content, fostering a community-driven approach to learning.",
      icon: "👁️✅"
    },
    {
      title: "Progress Tracking & Analytics",
      description: "Track your learning progress with detailed analytics and visualizations. Gain insights into your strengths and areas for improvement, and set achievable learning goals.",
      icon: "📊📈"
    }
  ];

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
          <a href="/features">Features</a>
          <a href="/pricing">Pricing</a>
          <a href="/About">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <main>
        <div className='container'>
          <h1>Platform Features</h1>
          <p className="intro">
            Discover the powerful features that make Stadi the ultimate platform for collaborative learning and content creation.
          </p>

        </div>

        <div className='container'>
          <section className="features-grid">
              {features.map((feature, index) => (
                <article key={index} className="feature-card">
                  <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
                  <h2>{feature.title}</h2>
                  <p>{feature.description}</p>
                </article>
              ))}
          </section>
        </div>

        <section className="cta-section">
          <h2>Ready to transform your learning experience?</h2>
          <p>Join Stadi today and unlock the full potential of collaborative learning.</p>
          <button className="cta-button">Get Started</button>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Stadi</h3>
            <p>Empowering collaborative learning through innovative technology.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/support">Support</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@Stadi.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Stadi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default FeaturesPage;
