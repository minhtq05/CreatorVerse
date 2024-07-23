import React from "react";
import "./styles.css";

export const Social = ({ creator }) => {
  return (
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
  );
};
