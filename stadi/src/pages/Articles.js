import React, { useState } from "react";
import "./Articles.css";
import Quiz from "../Quiz"; // Import the Quiz component

const Article = () => {
  const [articles, setArticles] = useState([
    {
      title: "Understanding React Hooks",
      description:
        "A deep dive into the power and flexibility of React Hooks for functional components.",
      url: "https://example.com/article1",
    },
    {
      title: "CSS Grid Layout: A Comprehensive Guide",
      description:
        "Learn how to use CSS Grid Layout to create responsive web designs with ease.",
      url: "https://example.com/article2",
    },
    {
      title: "JavaScript ES6 Features You Should Know",
      description:
        "Explore the new features introduced in ES6 and how they can improve your JavaScript code.",
      url: "https://example.com/article3",
    },
  ]);
  const [newArticleTitle, setNewArticleTitle] = useState("");
  const [newArticleDescription, setNewArticleDescription] = useState("");
  const [newArticleUrl, setNewArticleUrl] = useState("");
  const [showQuiz, setShowQuiz] = useState(false); // State for showing the quiz
  const [quizScore, setQuizScore] = useState(0);

  const handleAddArticle = (e) => {
    e.preventDefault();
    if (
      newArticleTitle.trim() &&
      newArticleDescription.trim() &&
      newArticleUrl.trim()
    ) {
      setArticles([
        ...articles,
        {
          title: newArticleTitle.trim(),
          description: newArticleDescription.trim(),
          url: newArticleUrl.trim(),
        },
      ]);
      setNewArticleTitle("");
      setNewArticleDescription("");
      setNewArticleUrl("");
    }
  };

  const handleQuizComplete = (score) => {
    setQuizScore(score);
    setShowQuiz(false);
    alert(`Quiz completed! Your score is ${score}`);
  };

  return (
    <>
      <div className="article-container">
        <h2 className="article-title">Stadi Articles</h2>

        <div className="article-form-container">
          <form onSubmit={handleAddArticle} className="article-form">
            <input
              type="text"
              placeholder="Enter article title"
              value={newArticleTitle}
              onChange={(e) => setNewArticleTitle(e.target.value)}
              className="article-input"
              required
            />
            <textarea
              placeholder="Enter article description"
              value={newArticleDescription}
              onChange={(e) => setNewArticleDescription(e.target.value)}
              className="article-description-input"
              required
            />
            <input
              type="url"
              placeholder="Enter article URL"
              value={newArticleUrl}
              onChange={(e) => setNewArticleUrl(e.target.value)}
              className="article-url-input"
              required
            />
            <button type="submit" className="article-button">
              Add Article
            </button>
          </form>
        </div>

        <div className="article-gallery">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              <h3 className="article-card-title">{article.title}</h3>
              <p className="article-card-description">{article.description}</p>
              <a
                href={article.url}
                className="article-card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
              <button 
                onClick={() => setShowQuiz(true)} 
                className="quiz-button"
              >
                Take Quiz
              </button>
            </div>
          ))}
        </div>

        {showQuiz && <Quiz onComplete={handleQuizComplete} />}
      </div>
      
      <footer className="footer">
        <p>© 2024 Stadi. All rights reserved.</p>
        <nav>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy</a>
        </nav>
      </footer>
    </>
  );
};

export default Article;
