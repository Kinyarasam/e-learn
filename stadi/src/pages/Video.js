import React, { useState } from "react";
import "./Video.css";

const Video = () => {
  const [videos, setVideos] = useState([
    {
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      description: "Big Buck Bunny - An open-source animated short film",
    },
    {
      url: "https://www.w3schools.com/html/movie.mp4",
      description: "Movie Trailer - Sample video for demonstration",
    },
    {
      url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
      description: "Sintel Trailer - A short film by the Blender Foundation",
    },
  ]);
  const [newVideoUrl, setNewVideoUrl] = useState("");
  const [newVideoDescription, setNewVideoDescription] = useState("");

  const handleAddVideo = (e) => {
    e.preventDefault();
    if (newVideoUrl.trim() && newVideoDescription.trim()) {
      setVideos([
        ...videos,
        { url: newVideoUrl.trim(), description: newVideoDescription.trim() },
      ]);
      setNewVideoUrl("");
      setNewVideoDescription("");
    }
  };

  return (
    <>
      <div className="video-container">
        <h2 className="video-title">Stadi Videos</h2>

        <div className="video-form-container">
          <form onSubmit={handleAddVideo} className="video-form">
            <input
              type="text"
              placeholder="Enter video URL"
              value={newVideoUrl}
              onChange={(e) => setNewVideoUrl(e.target.value)}
              className="video-input"
              required
            />
            <textarea
              placeholder="Enter video description"
              value={newVideoDescription}
              onChange={(e) => setNewVideoDescription(e.target.value)}
              className="video-description-input"
              required
            />
            <button type="submit" className="video-button">
              Add Video
            </button>
          </form>
        </div>

        <div className="video-gallery">
          {videos.map((video, index) => (
            <div key={index} className="video-card">
              <video controls className="video-player">
                <source src={video.url} type="video/mp4" />
              </video>
              <div className="video-description">
                <p>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
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

export default Video;
