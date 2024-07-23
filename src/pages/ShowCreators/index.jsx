import React, { useEffect } from "react";
import { useHandleCreators } from "./hooks";
import { CreatorCard } from "./components";
import "./styles.css";
import { supabase } from "../../client";

export const ShowCreators = () => {
  const { getCreatorsData, getCreatorsIsLoading, getCreatorsMutate, navigate } =
    useHandleCreators();

  return (
    <div className="creator-page">
      <div className="content-wrapper">
        <div className="content">
          <p>Hey Everyone!👋</p>
          <p>
            I'm Quang Minh Tran, and I have a passion for following talented
            builders and creators worldwide who work hard and showcase their
            achievements publicly.
          </p>
          <p>Here are the content creators I am excited to share with you.</p>
          <button
            className="create-new-button"
            onClick={() => {
              navigate("/creators/new");
            }}
          >
            Create New
          </button>
          <div className="creators-grid">
            {getCreatorsData?.map((creator, index) => (
              <CreatorCard creator={creator} key={index} />
            ))}
          </div>
          {getCreatorsIsLoading && <div className="loading-spinner"></div>}
        </div>
      </div>
    </div>
  );
};
