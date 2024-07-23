import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export const CreatorCard = ({ creator }) => {
  const navigate = useNavigate();

  return (
    <div className="creator-card">
      <div
        className="grid"
        style={{
          // backgroundImage: `linear-gradient(rgba(140, 121, 98, 0.2),rgba(38, 37, 104, 0.2)), url('${creator.imageUrl}');`,
          backgroundImage: `url('${creator.imageURL}')`,
        }}
      >
        <div className="edit">
          <button
            className="edit-button"
            onClick={() => navigate(`/creators/edit/${creator.id}`)}
          >
            <img src="/edit-button.svg" alt="" />
          </button>
        </div>
        <div className="social">
          {creator.instagramURL && (
            <a
              className="social-media"
              href={creator.instagramURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/instagram.png" alt="twitter" />
            </a>
          )}
          {creator.youtubeURL && (
            <a
              className="social-media"
              href={creator.youtubeURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/youtube.png" alt="twitter" />
            </a>
          )}
          {creator.twitterURL && (
            <a
              className="social-media"
              href={creator.twitterURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/twitter.png" alt="twitter" />
            </a>
          )}
        </div>
        <div
          className="info"
          onClick={() => {
            navigate("/creators/" + creator.id);
          }}
        >
          <h1>{creator.name}</h1>
          <p style={{ whiteSpace: "pre-wrap" }}>{creator.description}</p>
        </div>
      </div>
    </div>
  );
};
